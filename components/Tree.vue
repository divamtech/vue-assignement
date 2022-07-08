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
  setup({ data }) {
    const tree = new Tree()
    const flattenedData = getFlattenedData(JSON.parse(JSON.stringify(data)))
    flattenedData.forEach((value) => tree.add(value))
    return {
      tree,
    }
  },
})

function getFlattenedData(data: Data[], flattenedData: Data[] = []) {
  data.forEach((item) => {
    if (item.sub_groups.length) {
      flattenedData.push({
        ...item,
        sub_groups: [],
      })
      getFlattenedData(item.sub_groups, flattenedData)
    } else {
      flattenedData.push(item)
    }
  })
  return flattenedData
}
</script>