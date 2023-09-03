import request from '@/utils/request'

const apiPrefix = '/sysuser'
const userPrefix = '/permission/user'

export function login(data) {
  return request({
    url: `${apiPrefix}/login`,
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: `${apiPrefix}/logout`,
    method: 'post',
    data: {}
  })
}

export function getSysUserList(params) {
  return request({
    url: `${userPrefix}`,
    method: 'get',
    params
  })
}

export function addSysUser(data) {
  return request({
    url: `${userPrefix}`,
    method: 'post',
    data
  })
}

export function editSysUser(data) {
  return request({
    url: `${userPrefix}`,
    method: 'put',
    data
  })
}

export function resetSysUserPassword(data) {
  return request({
    url: `${userPrefix}/pwd/reset`,
    method: 'put',
    data
  })
}

export function kickSysUser(params) {
  return request({
    url: `${userPrefix}/online/kick`,
    method: 'put',
    params
  })
}
