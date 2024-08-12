<script setup>
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'

import {
  Button,
} from '@/components/ui/button'

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  showFirst: {
    type: Boolean,
    default: true,
  },
  showPrev: {
    type: Boolean,
    default: true,
  },
  showNext: {
    type: Boolean,
    default: true,
  },
  showLast: {
    type: Boolean,
    default: true,
  }
})
const currentPage = defineModel('page', { type: Number, default: 1 })
</script>

<template>
  <Pagination v-slot="{ page }" v-model:page="currentPage" :total="total" :sibling-count="1" show-edges :default-page="1">
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst v-if="showFirst" />
      <PaginationPrev v-if="showPrev" />

      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
          <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="item.type" :index="index" />
      </template>

      <PaginationNext v-if="showNext" />
      <PaginationLast v-if="showLast" />
    </PaginationList>
  </Pagination>
</template>
