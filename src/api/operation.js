import request from '@/utils/request'

const apiPrefix = '/permission/operationlog'

/**
 * 操作日志-列表
 */
export function getOperationList(params) {
  return request({
    url: `${apiPrefix}`,
    method: 'get',
    params
  })
}

