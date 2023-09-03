import { UserLevel } from '@/definitions/constants'

/**
 * @description 判斷目前的user是否為最高權限 (從 store 判斷)
 *
 * @param {*} store = (this.$store)
 * @returns
 */
export const isSuperAdminLevel = store => {
  return store.getters.user.roleId === UserLevel.SuperAdmin
}

/**
 * @description 判斷目前的user是否為商戶 (從 store 判斷)
 *
 * @param {*} store = (this.$store)
 * @returns
 */
export const isMerchantLevel = store => {
  if (
    store.getters.user.level === UserLevel.Merchant ||
    store.getters.user.level === UserLevel.SuperMerchant
  ) {
    return true
  } else {
    return false
  }
}
