import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import i18n from '@/lang'
import moment from 'moment'

const baseURL = process.env.VUE_APP_BASE_URL.indexOf('http') !== -1 ? '/api' : window.location.pathname + process.env.VUE_APP_BASE_URL

const hideSuccessAlertUrl = ['/sysuser/login', '/sysuser/logout']

console.log(baseURL)
// create an axios instance
const service = axios.create({
  baseURL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

export function getHeaders(isMultipart) {
  const headers = {}
  if (!isMultipart) {
    headers['Content-Type'] = 'application/json;charset=UTF-8'
  }
  if (store.getters.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    // headers['Authorization'] = `Bearer ${getToken()}`
    headers['Authorization'] = `Bearer ${getToken()}`
  }
  // headers['Access-Control-Allow-Origin'] = '*'
  return headers
}

// request interceptor
service.interceptors.request.use(
  config => {
    // Before request is sent
    let query = ''
    if (config.params) {
      query = '?' + Object.keys(config.params).map(key => {
        const value = config.params[key]
        if (value instanceof Date) {
          const str = moment(value).format('YYYY-MM-DD HH:mm:ss')
          return key + '=' + str
        } else {
          return key + '=' + config.params[key]
        }
      }).join('&')
    }
    console.log(`Request ${config.method.toUpperCase()} ${config.url}${query}`, config, config.data || null)
    // do something before request is sent
    config.headers = getHeaders()

    // 如果有 formData
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    const method = response.config.method.toUpperCase()
    const isHideSuccess = hideSuccessAlertUrl.indexOf(response.config.url.replace('/api', '')) >= 0

    if (res.status !== 0) {
      Message({
        message: res.desc || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.desc || 'Error'))
    } else {
      if (!isHideSuccess) {
        if (method === 'PUT') {
          Message({
            message: i18n.t('system.success.update'),
            type: 'success',
            duration: 5 * 1000
          })
        }
        if (method === 'POST') {
          Message({
            message: i18n.t('system.success.insert'),
            type: 'success',
            duration: 5 * 1000
          })
        }
      }

      return res.data
    }
  },
  error => {
    if (error.response.status === 401) {
      MessageBox.confirm(i18n.t('system.logged.content'), i18n.t('system.logged.title'), {
        confirmButtonText: i18n.t('system.logged.confirm'),
        cancelButtonText: i18n.t('system.cancel'),
        type: 'warning'
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      })
    } else {
      Message({
        message: error.response.data.desc,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
