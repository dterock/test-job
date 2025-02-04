import type { ItemProps } from '@/components/inventory/types'

export interface PresetInventoryItem {
  data: ItemProps
  index: number
}


export interface PresetInventoryEmits {
  delete: [number]
}