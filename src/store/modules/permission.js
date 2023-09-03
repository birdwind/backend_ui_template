import { asyncRoutes, constantRoutes } from '@/router'
import { getAuthValue } from '@/utils/auth'

/**
 * Use meta.role to determine if the current user has permission
 * @param acls
 * @param route
 */
function hasPermission(acls, route) {
  if (route.meta && route.meta.acls) {
    return acls.some(acl => route.meta.acls.indexOf(acl.key) >= 0)
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param acls
 */
export function filterAsyncRoutes(routes, acls) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(acls, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, acls)
      }
      res.push(tmp)
    }
  })

  // console.log(res)

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, data) {
    return new Promise(resolve => {
      let accessedRouters
      const acls = getAuthValue('acls')
      if (acls.indexOf('admin') >= 0) {
        accessedRouters = asyncRoutes
      } else {
        accessedRouters = filterAsyncRoutes(asyncRoutes, acls)
      }
      commit('SET_ROUTES', accessedRouters)
      resolve(accessedRouters)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
