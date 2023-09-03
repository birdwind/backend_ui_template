import viewTableMixins from '@/mixins/viewTableMixins'
import { banUser, getUserList, kickOutUser } from '@/api/user'
import { OnlineOptions } from '@/definitions/options'
import { Permission } from '@/definitions/constants'

export default {
  name: 'management',
  components: {},
  mixins: [viewTableMixins],
  props: [],
  data() {
    return {
      OnlineOptions,
      Permission,
      LoginChannel: [
        { id: 99, name: '' },
        { id: 1, name: 'Android' },
        { id: 2, name: 'IOS' },
        { id: 3, name: 'PC' }
      ]
    }
  },
  computed: {
  },
  mounted() {

  },
  methods: {
    getCssStyle(cell) {
      // TODO Init
    },
    getList() {
      this.paging.isLoading = true
      getUserList(this.paging.query).then(response => {
        this.mappingTableData(response)
        this.paging.isLoading = false
      })
    },
    handleSearch() {
      this.convertRangePickerDate(this.paging.queryCurrent.dates, 'createDateLe', 'createDateGt')
      this.getList()
    },
    handleBlock(row, isBan) {
      this.paging.isLoading = true
      banUser({
        memberId: row.userId,
        ban: isBan
      }).then(response => {
        this.getList()
      })
    },
    handleKickOut(row) {
      this.paging.isLoading = true
      kickOutUser({
        memberId: row.userId,
        kick: true
      }).then(response => {
        this.getList()
      })
    }
  }
}

