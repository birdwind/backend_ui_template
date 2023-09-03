import viewTableMixins from '@/mixins/viewTableMixins'
import VTree from '@/components/Tree/tree'
import { getRoleList, createRole, editRole, deleteRole } from '@/api/role'
import { deepClone } from '@/utils'
import { DialogType } from '@/definitions/constants'
import { DialogTypeOptions, StatusOptions } from '@/definitions/options'
import { isSuperAdminLevel } from '@/utils/user'
import { getAclList } from '@/api/permission'

export default {
  name: 'role',
  components: { VTree },
  mixins: [viewTableMixins],
  props: [],
  data() {
    return {
      StatusOptions,
      DialogTypeOptions,
      DialogType,
      dialogType: 0,
      editDialog: {
        isVisible: false,
        data: {},
        rules: {
          username: [{ required: true, trigger: 'blur' }],
          password: [{ required: true, trigger: 'blur' }]
        },
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
      getRoleList(this.paging.query).then(response => {
        this.mappingTableData(response)
        this.paging.isLoading = false
      })
    },
    handleSearch() {
      this.convertRangePickerDate(this.paging.queryCurrent.dates, 'createDateLe', 'createDateGt')
      this.getList()
    },
    handleCreate() {
      this.editDialog.data = deepClone(this.defaultFormData)
      this.editDialog.isVisible = true
      this.editDialog.dialogType = DialogType.Create

      const { roleId } = this.$store.getters.user
      let id = Number(roleId)
      // 管理者就不帶
      if (this.isSuperAdmin()) {
        id = undefined
      }
      getAclList(id).then(response => {
        this.editDialog.userAcls = response.list.map(this.buildTreeTitle)
      })
      this.editDialog.parentOptions = deepClone(this.tableData)
    },
    handleUpdate(row) {
      this.editDialog.data = deepClone(this.defaultFormData)
      this.editDialog.data.roleId = row.id
      this.editDialog.data.name = row.name
      this.editDialog.data.parentId = row.parentId === '-1' ? null : row.parentId
      this.editDialog.data.status = row.status
      this.editDialog.data.remark = row.remark
      this.editDialog.isVisible = true
      this.editDialog.dialogType = DialogType.Update

      const { roleId } = this.$store.getters.user
      let id = Number(roleId)
      // 管理者就不帶
      if (this.isSuperAdmin()) {
        id = undefined
      }
      getAclList(id).then(response => {
        this.editDialog.userAcls = response.list.map(this.buildTreeTitle)
      })
      this.editDialog.parentOptions = deepClone(this.tableData.filter(item => { return item.id !== row.id }))
    },
    isSuperAdmin() {
      return isSuperAdminLevel(this.$store)
    },
    tpl(node, ctx) {
      let titleClass = node.selected ? 'node-title node-selected' : 'node-title'
      if (node.searched) titleClass += ' node-searched'
      return (
        <span
          class={titleClass}
          domPropsInnerHTML={node.name}
          onClick={() => ctx.parent.nodeSelected(ctx.props.node)}>
        </span>
      )
    },
    buildTreeTitle(root, checkedList) {
      root.title = '<b>' + root.name + '</b>' +
        '<i style="color: #aaaaaa">' +
        ' ' + root.code + '</i>'

      if (checkedList && checkedList[root.id]) {
        root.checked = true
      }

      if (root.children) {
        root.children = root.children.map(res => this.buildTreeTitle(res, checkedList))
      }
      return root
    },
    createData() {
      this.editDialog.data.acls = this.$refs.aclTree.getCheckedNodes().map(n => Number(n.id))
      this.isLoading = true
      createRole(this.editDialog.data).then(response => {
        this.editDialog.isVisible = false
        this.getList()
      })
      this.isLoading = false
    },
    updateData() {
      this.editDialog.data.acls = this.$refs.aclTree.getCheckedNodes().map(n => Number(n.id))
      console.log(this.editDialog.data.acls)
      const temp = true
      if (temp) {
        this.isLoading = true
        editRole(this.editDialog.data).then(response => {
          this.editDialog.isVisible = false
          this.getList()
        })
        this.isLoading = false
      }
    },
    deleteRole(row) {
      this.paging.isLoading = true
      deleteRole({ roleId: row.id }).then(response => {
        this.getList()
      })
      this.paging.isLoading = false
    }
  }
}

