import request from '@/utils/request'

const apiPrefix = '/permission/acl'

/**
 * 權限管理-列表
 */
export function getAclList(params) {
  return request({
    url: `${apiPrefix}`,
    method: 'get',
    params
  })
}

