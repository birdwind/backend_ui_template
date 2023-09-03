import request from '@/utils/request'

const apiPrefix = '/group'

/**
 * 群組管理-列表
 */
export function getGroupList(params) {
  return request({
    url: `${apiPrefix}`,
    method: 'get',
    params
  })
}
