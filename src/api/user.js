import request from '@/utils/request'

const apiPrefix = '/user'

/**
 * 用戶管理-列表
 */
export function getUserList(params) {
  return request({
    url: `${apiPrefix}`,
    method: 'get',
    params
  })
}

/**
 * 用戶管理-封禁列表
 */
export function getBannedList(params) {
  return request({
    url: `${apiPrefix}/banned`,
    method: 'get',
    params
  })
}

/**
 * 用戶管理-封禁
 */
export function banUser(data) {
  return request({
    url: `${apiPrefix}/banned`,
    method: 'put',
    data
  })
}

/**
 * 用戶管理-踢下線
 */
export function kickOutUser(data) {
  return request({
    url: `${apiPrefix}/kick`,
    method: 'put',
    data
  })
}

/**
 * 內置帳號管理-列表
 */
export function getInternalUserList(params) {
  return request({
    url: `${apiPrefix}/internal`,
    method: 'get',
    params
  })
}

/**
 * 用戶聯絡人管理-列表
 */
export function getUserContactList(params) {
  return request({
    url: `${apiPrefix}/contacts`,
    method: 'get',
    params
  })
}
