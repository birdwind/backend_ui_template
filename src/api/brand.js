import request from '@/utils/request'

const apiPrefix = '/sysbrand/config'

/**
 * 品牌管理-列表
 */
export function getBrand(params) {
  return request({
    url: `${apiPrefix}`,
    method: 'get',
    params
  })
}
