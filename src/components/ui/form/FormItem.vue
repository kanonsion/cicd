<script setup>
import { provide } from 'vue'
import { useId } from 'radix-vue'
import { FORM_ITEM_INJECTION_KEY } from './injectionKeys'
import { cn } from '@/lib/utils'

const props = defineProps({})

const id = useId()
provide(FORM_ITEM_INJECTION_KEY, id)
</script>

<template>
  <div :class="cn('space-y-2', props.class)">
    <slot />
  </div>
</template>
