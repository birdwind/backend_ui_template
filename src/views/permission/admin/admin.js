import viewTableMixins from '@/mixins/viewTableMixins'
import { addSysUser, editSysUser, getSysUserList, kickSysUser, resetSysUserPassword } from '@/api/sysUser'
import { DialogTypeOptions } from '@/definitions/options'
import { DialogType } from '@/definitions/constants'
import { deepClone } from '@/utils'
import { getRoleList } from '@/api/role'
import { Rules } from '@/definitions/fieldCheck'

export default {
  name: 'admin',
  components: {},
  mixins: [viewTableMixins],
  props: [],
  data() {
    return {
      LevelOptions: [
        { id: 1, name: this.$t('admin.levelOption.management'), color: 'success' },
        { id: 2, name: this.$t('admin.levelOption.brand'), color: 'success' }
      ],
      DialogTypeOptions,
      DialogType,
      editDialog: {
        dialogType: 0,
        isVisible: false,
        data: {},
        rules: {
          username: [...Rules.requiredBlur, ...Rules.username],
          password: [...Rules.requiredBlur, ...Rules.password],
          nickname: [...Rules.requiredBlur, ...Rules.nickname],
          roleId: [...Rules.requiredBlur],
          level: [...Rules.requiredBlur],
          email: [...Rules.email]
        },
        RoleOptions: []
      },
      resetPasswordDialog: {
        dialogType: 0,
        isVisible: false,
        data: {},
        rules: {
          password: [...Rules.requiredBlur, ...Rules.password],
          confirmPassword: [...Rules.requiredBlur, ...Rules.password]
        },
        RoleOptions: []
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
      getSysUserList(this.paging.query).then(response => {
        this.mappingTableData(response)
        this.paging.isLoading = false
      })
    },
    handleSearch() {
      this.convertRangePickerDate(this.paging.queryCurrent.dates, 'createDateLe', 'createDateGt')
      this.getList()
    },
    handleCreate() {
      this.isLoading = true
      this.editDialog.data = deepClone(this.defaultFormData)
      this.editDialog.dialogType = DialogType.Create
      getRoleList().then(response => {
        this.editDialog.RoleOptions = response.list
      })
      this.editDialog.isVisible = true
      this.isLoading = false
    },
    async handleEdit(row) {
      this.isLoading = true
      this.editDialog.dialogType = DialogType.Update
      getRoleList().then(response => {
        this.editDialog.RoleOptions = response.list
      })
      this.editDialog.data = deepClone(row)
      this.editDialog.isVisible = true
      this.isLoading = false
    },
    createData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          this.isLoading = true
          this.editDialog.data.brand = 'BSK'
          addSysUser(this.editDialog.data).then(response => {
            this.getList()
            this.editDialog.isVisible = false
          }).finally(() => {
            this.isLoading = false
          })
        }
      })
    },
    updateData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          this.isLoading = true
          this.editDialog.data.brand = 'BSK'
          // this.editDialog.data.sysUserId = this.editDialog.data.id
          // delete this.editDialog.data.id
          editSysUser(this.editDialog.data).then(response => {
            this.getList()
            this.editDialog.isVisible = false
          }).finally(() => {
            this.isLoading = false
          })
        }
      })
    },
    handleResetPassword(row) {
      this.resetPasswordDialog.data = deepClone(row)
      this.resetPasswordDialog.isVisible = true
    },
    resetPassword() {
      this.$refs['resetPasswordForm'].validate(valid => {
        if (valid) {
          this.isLoading = true
          resetSysUserPassword(this.resetPasswordDialog.data).then(response => {
            this.getList()
            this.resetPasswordDialog.isVisible = false
          }).finally(() => {
            this.isLoading = false
          })
        }
      })
    },
    kick(row) {
      this.paging.isLoading = true
      kickSysUser({ userId: row.id }).then(response => {
      }).finally(() => {
        this.paging.isLoading = false
      })
    }
  }
}
