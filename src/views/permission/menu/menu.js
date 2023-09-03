import { getAclList } from '@/api/permission'
import VTree from '@/components/Tree/tree'
import viewMixins from '@/mixins/viewMixins'
import { deepClone } from '@/utils'
import { isSuperAdminLevel } from '@/utils/user'

export default {
  name: 'management',
  components: { VTree },
  mixins: [viewMixins],
  props: [],
  data() {
    return {
      acls: [],
      formData: {}
    }
  },
  created() {
    this.getList()
  },
  computed: {},
  mounted() {

  },
  methods: {
    getList() {
      this.isLoading = true
      const { roleId } = this.$store.getters.user
      let id = Number(roleId)
      // 管理者就不帶
      if (this.isSuperAdmin()) {
        console.log('isSuperAdmin')
        id = undefined
      }
      getAclList(id).then(response => {
        this.acls = response.list.map(this.buildTreeTitle)
      }).finally(() => {
        this.isLoading = false
      })
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
    nodeClick(node) {
      if (node.parent === null) {
        this.formData.parentId = node.id
        this.formData.parentname = node.name
        this.formData.name = null
        this.formData.id = null
        this.dialogType = 0
      } else {
        this.formData.id = node.id
        this.formData.parentname = node.parent.name
        this.formData.parentId = node.parent.id
        this.formData.name = node.name
        this.formData.order = node.order
        this.dialogType = 1
      }
      this.formData = deepClone(this.formData)
    },
    isSuperAdmin() {
      return isSuperAdminLevel(this.$store)
    },
    buildTreeTitle(root) {
      const str = (root.isLog) ? ' (isLog: true)' : ''
      root.title = '<b>' + root.name + '</b>' +
        '<i style="color: #aaaaaa">' +
        ' ' + root.code + str + '</i>'

      if (root.children) {
        root.children = root.children.map(this.buildTreeTitle)
      }
      return root
    }
  }
}

