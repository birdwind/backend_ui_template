import { formatDateAsEnd, formatDateAsStart } from '@/utils/format'
import permission from '@/directive/permission'
import { DialogType, Permission } from '@/definitions/constants'
import { DialogTypeOptions, StatusOptions } from '@/definitions/options'

export default {
  directives: { permission },
  data() {
    return {
      DialogType,
      DialogTypeOptions,
      StatusOptions,
      Permission,
      isLoading: false,
      page: 0,
      paging: {
        isShow: true,
        isLoading: false,
        totalElements: null,
        query: {
          pageNo: 1,
          pageSize: 10,
          brand: 'BSK',
          sort: ''
        },
        queryCurrent: {
          dates: null
        }
      },
      tableData: [],
      defaultFormData: {
      }
    }
  },
  created() {
    this.handleSearch()
  },
  methods: {
    handleCurrentChange(val) {
      this.page = val
      this.paging.query.pageNo = this.page + 1
      this.handleSearch()
    },
    handleSizeChange(val) {
      this.paging.query.pageSize = val
      this.handleSearch()
    },
    onSortChange(column) {
      console.log(column, 'onSortChange')
      if (column.prop) {
        this.paging.query.sort = `${column.prop},${column.order === 'ascending' ? 'ASC' : 'DESC'}`
        this.handleSearch()
      }
    },
    convertRangePickerDate(value, le, gt) {
      if (value) {
        this.paging.query[gt] = formatDateAsStart(value[0])
        this.paging.query[le] = formatDateAsEnd(value[1])
      }
    },
    mappingTableData(response) {
      this.tableData = response.list
      this.paging.totalElements = Number(response.pageTotal)
      this.paging.isShow = !this.paging.isShow
    }
  }
}
