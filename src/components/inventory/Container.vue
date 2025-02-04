<script lang="ts" setup>
  import type { InventoryProps, InventaryEmits } from './types'
  import Item from './Item.vue'
  import storeInventory from '@/store/inventory';
  import { ref } from 'vue'

  defineProps<InventoryProps>()
  const emit = defineEmits<InventaryEmits>()
  const store = storeInventory()

  const drugItemIdx = ref<number | null>(null)

  const onDrop = (e: any, idx: number) => {
    if (drugItemIdx.value != null) {
      store.moveItem(drugItemIdx.value, idx)
      onDragLeave(e)
    }
  }

  const onDragEnter = (e: any) => {
    e.target.classList.add('inventory-cell--dropped')
  }
  const onDragLeave = (e: any) => {
    e.target.classList.remove('inventory-cell--dropped')
  }
</script>


<template>
  <div class="inventory">
    <div
      v-for="i in 25"
      @drop="onDrop($event, i)"
      @dragstart="drugItemIdx = i"
      @dragover.prevent
      @dragenter.prevent="onDragEnter"
      @dragleave.prevent="onDragLeave"
      class="inventory-cell"
      :data-q="items[i]?.quantity"
    >
      <Item @click="$emit('selectItem', i)" v-if="items[i]" v-bind="items[i]" draggable="true" />
    </div>
  </div>
</template>


<style>
  .inventory {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  }

  .inventory-cell {
    position: relative;
    display: grid;
    grid-template-columns: 50%;
    place-content: center;
    outline: 1px solid oklch(var(--color-border));
    aspect-ratio: 1/1;
    cursor: pointer;
    transition: background-color .15s;
  }

  .inventory-cell:hover,
  .inventory-cell--dropped {
    background: oklch(var(--surface-active));
  }

  .inventory-cell::after {
    content: attr(data-q);
    position: absolute;
    bottom: 0;
    right: 0;
    outline: 1px solid oklch(var(--color-border));
    font-size: 1.2rem;
    padding: 0 .3em;
    border-radius: calc(var(--radius) / 4) 0 0;
  }
</style>