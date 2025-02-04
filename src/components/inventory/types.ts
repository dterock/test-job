export interface InventoryProps {
  items: Items
}

export interface ItemProps {
  color: 'green' | 'yellow' | 'blue',
  quantity: number
}

export interface Items {
  [index: number]: ItemProps
}

export interface InventaryEmits {
  selectItem: [index: number]
}