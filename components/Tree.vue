<template>
  <ul>
    <TreeNode :nodes="tree.root.nodes" :depth="0" :label="tree.root.name">
    </TreeNode>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import TreeNode from './TreeNode.vue'
import { Data } from '~/types'
import { Tree } from '~/utils/tree'

export default Vue.extend({
  name: 'Tree',
  components: {
    TreeNode,
  },
  props: {
    data: {
      required: true,
      type: Array as () => Data[],
    },
  },
  setup() {
    const tree = new Tree()
    return {
      tree,
    }
  },
})
</script>
