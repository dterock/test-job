<script lang="ts" setup>
  import type { SkeletonBlockProps } from './types'

  defineProps<SkeletonBlockProps>()
</script>


<template>
  <div
    :class="[ 'skeleton-block', `skeleton-block--${color}` ]"
    :style="{ '--_h': height, '--_w': width, '--_c': oklch }"
  />
</template>


<style>
  @property --_pos {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 0%;
  }

  @property --_alpha {
    syntax: '<number>';
    inherits: false;
    initial-value: .05;
  }

  @keyframes skeleton-anim {
    0%, 100% { --_alpha: 0; }
    25% { --_alpha: .05; }
    100% { --_pos: 150%; }
  }

  .skeleton-block {
    height: var(--_h, 1rem);
    max-width: var(--_w, auto);
    width: 100%;
    text-align: center; 
    border-radius: .75rem;
    animation: skeleton-anim 1s ease-in-out .3s infinite;
    background: 
      linear-gradient(90deg, transparent, oklch(var(--_c, 100% 0 0) / var(--_alpha)) var(--_pos), transparent),
      oklch(var(--_c, 100% 0 0) / .1);
  }

  .skeleton-block--green {
    --_c: 72.14% 0.1026 173.12;
  }
  .skeleton-block--yellow {
    --_c: 82.73% 0.1224 86.69;
  }
  .skeleton-block--blue {
    --_c: 54.38% 0.191 267.01;
  }
</style>