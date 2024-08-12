<script  setup>
import { useFormField } from './useFormField'
import { cn } from '@/lib/utils'
import { Label } from 'radix-vue'

const props = defineProps({})

const { error, formItemId } = useFormField()
</script>

<template>
  <Label
    :class="cn(
      error && 'text-destructive',
      props.class,
    )"
    :for="formItemId"
  >
    <slot />
  </Label>
</template>
