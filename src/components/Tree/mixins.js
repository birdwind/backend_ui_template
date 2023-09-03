function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

function setDragNode(guid, node) {
  window['treeDrag'] = {}
  window['treeDrag'][guid] = node
}

function getDragNode(guid) {
  return window['treeDrag'][guid]
}

function hasInGenerations(root, node) {
  // eslint-disable-next-line no-prototype-builtins
  if (root.hasOwnProperty('children') && root.children) {
    for (const rn of root.children) {
      if (rn === node) return true
      if (rn.children) return hasInGenerations(rn, node)
    }
    return false
  }
}

export default {
  methods: {
    guid,
    setDragNode,
    getDragNode,
    hasInGenerations
  }
}
