<script lang="ts" setup>
  import type { PresetInventoryEmits, PresetInventoryItem } from './types'
  import Skeleton from '@/components/skeleton/Block.vue'
  import Button from '@/components/form/Button.vue'
  import Input from '@/components/form/Input.vue'
  import storeInventory from '@/store/inventory'
  import { ref } from 'vue'

  const props = defineProps<PresetInventoryItem>()
  const emits = defineEmits<PresetInventoryEmits>()
  const store = storeInventory()

  const processDel = ref(false)
  const quantity = ref('')

  const onDelete = () => {
    if (processDel.value) {
      emits('delete', props.index)
      store.deleteItem(props.index, Number(quantity.value || 0))
    }
    else {
      processDel.value = true
    }
  }

  const onCancel = () => {
    processDel.value = false
    quantity.value = ''
  }
</script>


<template>
  <section class="preset-inventary-item">
    <Skeleton class="preset-inventary-item__skeleton" :color="data.color" width="50%" height="18rem" />
    <div class="preset-inventary-item__separator" />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />

    <div class="preset-inventary-item__del">
      <Input
        v-model="quantity"
        v-if="processDel"
        type="number"
        placeholder="Введите количество"
        class="preset-inventary-item__input"
      />

      <Button v-if="processDel" @click="onCancel" color="white" fill>
        Отмена
      </Button>

      <Button @click="onDelete" fill>
        <span v-if="!processDel">Удалить предмет</span>
        <span v-else>Подтвердить</span>
      </Button>
    </div>
  </section>
</template>


<style>
  .preset-inventary-item {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-content: start;
    font-size: 1.2rem;
    gap: 1rem;
    padding: 2rem;
    overflow: auto;
  }

  .preset-inventary-item__skeleton {
    margin: 0 auto;
  }

  .preset-inventary-item__separator {
    margin: 3rem 0;
    border-bottom: 1px solid oklch(var(--color-border));
  }

  .preset-inventary-item__del {
    display: grid;
    grid-auto-columns: 1fr;
    gap: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
    border-top: 1px solid oklch(var(--color-border));
    background: oklch(var(--surface-primary));
  }

  .preset-inventary-item__input {
    grid-column: 1/3;
  }
</style>