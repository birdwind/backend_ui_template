import request from '@/utils/request'

const apiPrefix = '/fund'

export function getFundRecord(params) {
  return request({
    url: `${apiPrefix}/record`,
    method: 'get',
    params
  })
}
