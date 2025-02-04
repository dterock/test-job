import type { TransitionProps } from "vue"

export interface ModalProps {
  type?: 'aside',
  transition?: TransitionProps
}


export interface ModalEmits {
  'update:modelValue': [boolean]
}