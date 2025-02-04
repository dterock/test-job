<script lang="ts" setup>
  import type { InputEmits } from './types'

  const model = defineModel()
  const emits = defineEmits<InputEmits>()

  const onInput = (e: any) => {
    emits('update:modelValue', e.target.value)
  }
</script>


<template>
  <input @input="onInput" :value="model" class="form-input">
</template>


<style>
  .form-input {
    width: 100%;
    padding: 1rem;
    background: oklch(var(--surface-secondary));
    border-radius: calc(var(--radius) / 2);
    border: 1px solid oklch(var(--color-border));
    color: oklch(var(--color-contrast));
    box-sizing: border-box;
    outline: none;
  }

  .form-input[type="number"]::-webkit-outer-spin-button,
  .form-input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }

  .form-input[type='number'],
  .form-input[type="number"]:hover,
  .form-input[type="number"]:focus {
      appearance: none;
      -moz-appearance: textfield;
  }
</style>