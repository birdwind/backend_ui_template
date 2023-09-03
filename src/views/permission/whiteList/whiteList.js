import viewTableMixins from '@/mixins/viewTableMixins'
import { createWhiteList, deleteWhiteList, editWhiteList, getWhiteList } from '@/api/whiteList'
import { DialogType } from '@/definitions/constants'
import { deepClone } from '@/utils'
import { Rules } from '@/definitions/fieldCheck'

export default {
  name: 'white-list',
  components: {},
  mixins: [viewTableMixins],
  props: [],
  data() {
    return {
      editDialog: {
        isVisible: false,
        data: {},
        rules: {
          ip: [...Rules.requiredBlur, ...Rules.ip]
        },
        dialogType: DialogType.Create,
        userAcls: [],
        parentOptions: []
      }
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
      getWhiteList(this.paging.query).then(response => {
        this.mappingTableData(response)
        this.paging.isLoading = false
      })
    },
    handleSearch() {
      this.convertRangePickerDate(this.paging.queryCurrent.dates, 'createDateLe', 'createDateGt')
      this.getList()
    },
    handleCreate() {
      this.editDialog.isVisible = true
      this.editDialog.data = deepClone(this.defaultFormData)
      this.editDialog.dialogType = DialogType.Create
    },
    handleUpdate(row) {
      this.editDialog.data.whiteId = row.id
      this.editDialog.data.ip = row.ip
      this.editDialog.data.remark = row.remark
      this.editDialog.isVisible = true
      this.editDialog.dialogType = DialogType.Update
    },
    createData() {
      this.isLoading = true
      createWhiteList(this.editDialog.data).then(response => {
        this.editDialog.isVisible = false
        this.getList()
      })
      this.isLoading = false
    },
    updateData() {
      this.isLoading = true
      editWhiteList(this.editDialog.data).then(response => {
        this.editDialog.isVisible = false
        this.getList()
      })
      this.isLoading = false
    },
    deleteData(row) {
      this.paging.isLoading = true
      deleteWhiteList({ whiteId: row.id }).then(response => {
        this.editDialog.isVisible = false
        this.getList()
      })
      this.paging.isLoading = false
    }
  }
}

