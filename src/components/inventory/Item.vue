<script lang="ts" setup>
  import type { ItemProps } from './types'
  import Skeleton from '@/components/skeleton/Block.vue'

  defineProps<ItemProps>()
</script>


<template>
  <Skeleton class="skeleton-block--inventory-item" :color />
</template>


<style>
  .skeleton-block--inventory-item {
    aspect-ratio: 1/1;
    height: auto;
  }
</style>