import { login, logout } from '@/api/sysUser'
import { setToken, removeToken, setAuth, getAuthValue, getToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  username: getAuthValue('username'),
  brand: getAuthValue('brand'),
  avatar: '',
  introduction: '',
  acls: getAuthValue('acls'),
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.username = name
  },
  SET_BRAND: (state, brand) => {
    state.brand = brand
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_ACLS: (state, acls) => {
    state.acls = acls
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        // eslint-disable-next-line no-unused-vars
        const { userId, username, roleId, brand, token, acls } = response
        commit('SET_TOKEN', token)
        commit('SET_NAME', username)
        commit('SET_BRAND', brand)
        commit('SET_ACLS', acls)

        setToken(token)
        setAuth(response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      resolve('admin')
      commit('SET_ROLES', 'admin')
      commit('SET_NAME', name)
      // commit('SET_AVATAR', avatar)
      // commit('SET_INTRODUCTION', introduction)
      // getInfo(state.token).then(response => {
      //   const { data } = response
      //
      //   if (!data) {
      //     reject('Verification failed, please Login again.')
      //   }
      //
      //   const { roles, name, avatar, introduction } = data
      //
      //   // roles must be a non-empty array
      //   if (!roles || roles.length <= 0) {
      //     reject('getInfo: roles must be a non-null array!')
      //   }
      //
      //   commit('SET_ROLES', 'admin')
      //   commit('SET_NAME', name)
      //   commit('SET_AVATAR', avatar)
      //   commit('SET_INTRODUCTION', introduction)
      //   resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
