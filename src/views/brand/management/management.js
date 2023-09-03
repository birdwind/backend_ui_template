import { getBrand } from '@/api/brand'
import viewMixins from '@/mixins/viewMixins'

export default {
  name: 'management',
  mixins: [viewMixins],
  props: [],
  data() {
    return {
      showDeleteIcon: false,
      rules: {
      },
      formData: {
        protocol: '',
        domain: '',
        pc: {},
        ios: {},
        android: {},
        banner: {},
        official: {},
        redEnvelope: {},
        version: ''
      }
    }
  },
  computed: {
    androidImgUrl() {
      return this.formData.android.imgUrlFile ? this.formData.android.imgUrlFile : this.formData.android.imgUrl
    },
    iosImgUrl() {
      return this.formData.ios.imgUrlFile ? this.formData.ios.imgUrlFile : this.formData.ios.imgUrl
    },
    pcImgUrl() {
      return this.formData.pc.imgUrlFile ? this.formData.pc.imgUrlFile : this.formData.pc.imgUrl
    },
    officialAvatar() {
      return this.formData.official.avatarFile ? this.formData.official.avatarFile : this.formData.official.avatar
    }
  },
  created() {
    this.getData()
  },
  mounted() {

  },
  methods: {
    getData() {
      this.isLoading = true
      getBrand().then(response => {
        this.formData = response
        this.formData.banner.autoEnable = Number(this.formData.banner.autoEnable)
        this.formData.banner.enable = Number(this.formData.banner.enable)
        this.formData.redEnvelope.enable = Number(this.formData.redEnvelope.enable)
        this.formData.redEnvelope.sendEnable = Number(this.formData.redEnvelope.sendEnable)
        this.formData.redEnvelope.receiveEnable = Number(this.formData.redEnvelope.receiveEnable)
        this.formData.pc.contactsEnable = Number(this.formData.pc.contactsEnable)
        this.formData.android.contactsEnable = Number(this.formData.android.contactsEnable)
        this.formData.ios.contactsEnable = Number(this.formData.ios.contactsEnable)
        this.isLoading = false
      })
    },
    handlePreviewImage(event, target) {
      const input = event.target
      if (input.files && input.files[0]) {
        // 顯示用
        const reader = new FileReader()
        const that = this
        reader.onload = e => {
          if (target === 'official') {
            that.$set(that.formData[target], 'avatarFile', e.target.result)
          } else {
            that.$set(that.formData[target], 'imgUrlFile', e.target.result)
          }
          // 有上傳圖片
          that.showDeleteIcon = true
        }
        reader.readAsDataURL(input.files[0])
      }
    }
  }
}

