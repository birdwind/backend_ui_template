import request from '@/utils/request'

const apiPrefix = '/banner'

/**
 * 廣告管理-列表
 */
export function getBannerList(params) {
  return request({
    url: `${apiPrefix}`,
    method: 'get',
    params
  })
}
