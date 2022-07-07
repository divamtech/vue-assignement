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


}
