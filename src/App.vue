<script lang="ts" setup>
  import Skeleton from '@/components/skeleton/Block.vue'
  import Inventory from '@/components/inventory/Container.vue'
  import ModalAside from '@/components/modal/Base.vue'
  import ModalInvItem from '@/components/modal/presets/InventaryItem.vue'
  import storeInventory from '@/store/inventory'
  import { ref } from 'vue'

  const store = storeInventory()
  const modal = ref(false)
  const selectedItem = ref<number | null>(null)

  store.loadItems()

  const onSelectItem = (e: number) => {
    modal.value = true
    selectedItem.value = e
  }

  const onDelete = () => {
    selectedItem.value = null
    modal.value = false
  }
</script>


<template>
  <div class="layout">
    <aside class="layout__aside">
      <Skeleton height="20rem" />
      <Skeleton height="2rem" class="layout__skeleton--margin" />
      <Skeleton width="80%" />
      <Skeleton width="90%" />
      <Skeleton width="85%" />
      <Skeleton width="80%" />
      <Skeleton width="75%" />
      <Skeleton width="50%" />
    </aside>

    <main class="layout__content">
      <Inventory @select-item="onSelectItem" :items="store.items" />
    </main>

    <footer class="layout__footer">
      <Skeleton height="2rem" />
    </footer>

    <ModalAside v-model="modal">
      <ModalInvItem
        @delete="onDelete"
        v-if="selectedItem"
        :data="store.items[selectedItem]"
        :index="selectedItem"
      />
    </ModalAside>
  </div>
</template>


<style>
  .layout {
    display: grid;
    grid-template-columns: 20rem minmax(min-content, 60rem);
    grid-template-rows: 1fr auto;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    box-sizing: border-box;
    min-height: 100dvh;
    background: oklch(var(--surface-secondary));
  }

  .layout__aside,
  .layout__content,
  .layout__footer {
    background: oklch(var(--surface-primary));
    border: 1px solid oklch(var(--color-border));
    overflow: hidden;
    border-radius: var(--radius);
    padding: 2rem;
  }

  .layout__aside {
    display: grid;
    grid-template-columns: 1fr;
    align-content: start;
    gap: 1rem;
  }

  .layout__content {
    align-self: start;
    padding: 0;
  }

  .layout__footer {
    grid-column: 1/3;
  }

  .layout__skeleton--margin {
    margin: 1rem 0;
  }
  
  .layout__aside .skeleton-block {
    margin-left: auto;
    margin-right: auto;
  }
</style>