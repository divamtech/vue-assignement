<template>
  <div class="tree-menu">
    <div :style="indent" class="label-wrapper" @click="toggleChildren">
      <li class="label">
        {{ label }}
      </li>
    </div>
    <ol>
      <TreeNode
        v-for="node in nodes"
        v-bind:key="node.name"
        :nodes="node.nodes"
        :label="node.name"
        :depth="depth + 1"
      >
      </TreeNode>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TreeNodeType } from '~/types'

export default Vue.extend({
  name: 'TreeNode',
  data() {
    return {
      showChildren: false,
    }
  },
  props: {
    nodes: {
      required: true,
      type: Array as () => TreeNodeType[],
    },
    depth: {
      required: true,
      type: Number,
    },
    label: {
      required: true,
      type: String,
    },
  },
  computed: {
    indent() {
      const depth = this.depth as number
      return { marginLeft: `${depth * 25}px` }
    },
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren
    },
  },
})
</script>

<style scoped>
.tree-menu {
  padding: 10px;
}

.label-wrapper {
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.label {
  padding: 0 10px 10px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  line-height: 1em;
}
</style>
