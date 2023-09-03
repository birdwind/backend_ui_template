import store from '@/store'

function checkPermission(el, binding) {
  const { value } = binding
  const aclList = store.getters && store.getters.user.acls

  if (value && value instanceof Array && value.length > 0) {
    if (value.length > 0) {
      const permissions = value

      const hasPermission = aclList.some(acl => {
        return permissions.includes(acl.key)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','editor']"`)
  }
}

export default {
  inserted(el, binding) {
    checkPermission(el, binding)
  },
  update(el, binding) {
    checkPermission(el, binding)
  }
}
