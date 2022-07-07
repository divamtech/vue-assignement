import { Data, TreeNodeType } from '~/types'

class TreeNode implements TreeNodeType {
  id: number | null
  name: string
  nodes: TreeNodeType[]
  constructor(id: number | null, name: string) {
    this.id = id
    this.name = name
    this.nodes = []
  }
}

export class Tree {
  root: TreeNode
  constructor() {
    this.root = new TreeNode(null, 'Primary')
  }

  add(value: Data) {
    const currentNode = this.root
    if (currentNode.id === value.parent_group_id) {
      const newNode = new TreeNode(value.id, value.name)
      currentNode.nodes.push(newNode)
    } else if (currentNode.nodes.length) {
      this.traverseNode(currentNode.nodes, value)
    }
  }

  traverseNode(nodes: TreeNodeType[], value: Data) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      if (node.id === value.parent_group_id) {
        const newNode = new TreeNode(value.id, value.name)
        node.nodes.push(newNode)
      } else if (node.nodes.length) {
        this.traverseNode(node.nodes, value)
      }
    }
  }
}
