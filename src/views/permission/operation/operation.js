import viewTableMixins from '@/mixins/viewTableMixins'
import { getOperationList } from '@/api/operation'

export default {
  name: 'operation',
  components: {},
  mixins: [viewTableMixins],
  props: [],
  data() {
    return {
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
      getOperationList(this.paging.query).then(response => {
        this.mappingTableData(response)
        this.paging.isLoading = false
      })
    },
    handleSearch() {
      this.convertRangePickerDate(this.paging.queryCurrent.dates, 'createTimeLe', 'createTimeGt')
      this.getList()
    }
  }
}

