import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhCNLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import elementZhTWLocale from 'element-ui/lib/locale/lang/zh-TW'// element-ui lang
import enLocale from './en'
import zhLocale from './zh-TW'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh_tw: {
    ...zhLocale,
    ...elementZhTWLocale
  },
  zh_cn: {
    ...zhLocale,
    ...elementZhCNLocale
  }
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'zh_tw', // set locale
  messages // set locale messages
})

export default i18n
