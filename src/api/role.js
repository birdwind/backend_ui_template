import request from '@/utils/request'

const apiPrefix = '/permission/role'

/**
 * 角色管理-列表
 */
export function getRoleList(params) {
  return request({
    url: `${apiPrefix}`,
    method: 'get',
    params
  })
}

/**
 * 角色管理-添加
 */
export function createRole(data) {
  return request({
    url: `${apiPrefix}`,
    method: 'post',
    data
  })
}

/**
 * 角色管理-編輯
 */
export function editRole(data) {
  return request({
    url: `${apiPrefix}`,
    method: 'put',
    data
  })
}

/**
 * 角色管理-刪除
 */
export function deleteRole(data) {
  return request({
    url: `${apiPrefix}`,
    method: 'delete',
    data
  })
}
