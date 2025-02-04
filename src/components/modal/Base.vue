<script lang="ts" setup>
  import type { ModalEmits, ModalProps } from './types'

  defineModel()
  defineProps<ModalProps>()
  defineEmits<ModalEmits>()
</script>


<template>
    <Transition  name="modal" mode="out-in">
      <div
        v-if="modelValue"
        @click.self="$emit('update:modelValue', false)"
        :class="[ 'modal', `modal--${type || 'aside'}` ]"
      >
        <div class="modal__content">
          <div class="modal__title">
            <span @click="$emit('update:modelValue', false)" class="modal__close">+</span>
          </div>

          <slot />
        </div>
      </div>
    </Transition>
</template>


<style>
  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    cursor: pointer;
  }

  .modal__content {
    display: grid;
    grid-template-rows: min-content 1fr;
    background: oklch(var(--surface-primary) / .7);
    outline: 1px solid oklch(var(--color-border));
    backdrop-filter: blur(5px);
    cursor: default;
  }

  .modal--aside .modal__content {
    position: absolute;
    width: 25%;
    height: 100%;
    left: 75%;
  }

  .modal__title {
    display: grid;
    justify-content: end;
    padding: 0 2rem;
  }

  .modal__close {
    display: inline-block;
    rotate: 45deg;
    font-family: monospace;
    font-size: 3rem;
    cursor: pointer;
    color: oklch(var(--color-contrast));
  }

  .modal-enter-active,
  .modal-leave-active {
    transition: translate .5s ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    translate: 100%;
  }
</style>