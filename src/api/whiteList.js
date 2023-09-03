import request from '@/utils/request'

const apiPrefix = '/permission/white'

/**
 * 白名單管理-列表
 */
export function getWhiteList(params) {
  return request({
    url: `${apiPrefix}`,
    method: 'get',
    params
  })
}

/**
 * 白名单管理-添加
 */
export function createWhiteList(data) {
  return request({
    url: `${apiPrefix}`,
    method: 'post',
    data
  })
}

/**
 * 白名单管理-编辑
 */
export function editWhiteList(data) {
  return request({
    url: `${apiPrefix}`,
    method: 'put',
    data
  })
}

/**
 * 白名单管理-删除
 */
export function deleteWhiteList(data) {
  return request({
    url: `${apiPrefix}`,
    method: 'delete',
    data
  })
}
