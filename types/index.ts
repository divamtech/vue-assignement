export interface Data {
  id: number
  parent_group_id: number | null
  name: string
  alias: string
  category: string
  editable: boolean
  restricted: boolean
  balance: number
  sub_groups: []
  parent_name: string
}

export interface TreeNodeType {
  id: number | null
  name: string
  nodes: TreeNodeType[]
}
