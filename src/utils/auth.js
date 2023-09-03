import Cookies from 'js-cookie'
import { CookiesKey } from '@/definitions/constants'

let _aclList

export function getToken() {
  return Cookies.get(CookiesKey.TokenKey)
}

export function setToken(token) {
  return Cookies.set(CookiesKey.TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(CookiesKey.TokenKey)
}

export function setAuth(data) {
  sessionStorage.setItem(CookiesKey.Auth, JSON.stringify(data))
}

export function getAuth() {
  return JSON.parse(sessionStorage.getItem(CookiesKey.Auth))
}

export function getAuthValue(key) {
  const auth = getAuth()
  return auth ? auth[key] : ''
}

/**
 * @description 判斷是否有 acl 功能
 *
 * @param {*} acl
 * @returns
 */
export function hasAcl(acl) {
  return !!_aclList.find(a => a === acl)
}
