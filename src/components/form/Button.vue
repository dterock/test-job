<script lang="ts" setup>
  import { computed } from 'vue'
  import type { ButtonProps } from './types'

  const props = defineProps<ButtonProps>()

  const classes = computed(() => [
    'form-button',
    {
      'form-button--fill': props.fill,
      [`form-button--${props.color}`]: props.color
    }
  ])
</script>


<template>
  <button :class="classes">
    <slot />
  </button>
</template>


<style>
  .form-button {
    background: oklch(var(--color-primary));
    border-radius: calc(var(--radius) / 2);
    color: oklch(var(--color-contrast));
    padding: 1rem;
    font-size: 1.1rem;
    width: max-content;
    outline: none;
    cursor: pointer;
  }

  .form-button--fill {
    width: 100%;
  }

  .form-button--white {
    background: oklch(100% 0 0);
    color: oklch(var(--color-text-priamry));
  }
</style>