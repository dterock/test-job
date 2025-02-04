import type { Items } from '@/components/inventory/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const defaultItems: Items = {
  1: {
    color: 'green',
    quantity: 6
  },
  2: {
    color: 'yellow',
    quantity: 4
  },
  3: {
    color: 'blue',
    quantity: 8
  }
}


export default defineStore('inventory', () => {
  const items = ref<Items>({})

  const deleteItem = (id: number, quantity: number) => {
    if (items.value[id]) {
      if (quantity < items.value[id].quantity) {
        items.value[id].quantity -= quantity
      }
      else {
        delete items.value[id]
      }
    }

    syncStorage()
  }

  const moveItem = (from: number, to: number) => {
    if (items.value[to]) {
      const old = items.value[to]
      items.value[to] = items.value[from]
      items.value[from] = old
    }
    else {
      items.value[to] = items.value[from]
      delete items.value[from]
    }

    syncStorage()
  }

  const loadItems = () => {
    const data = localStorage.getItem('items')

    try {
      if (data) {
        items.value = JSON.parse(data) as Items
        return
      }
    }
    catch {}

    items.value = defaultItems
    syncStorage(defaultItems)
  }

  const syncStorage = (data = items.value) => {
    localStorage.setItem('items', JSON.stringify(data))
  }


  return { items, deleteItem, moveItem, loadItems }
})