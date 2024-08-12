<template>
  <div class="h-full flex flex-col">
    <Menu />
    <div class="border-t flex-1">
      <div class="bg-background h-full">
        <div class="grid lg:grid-cols-5 h-full">
          <Sidebar class="hidden lg:block" />
          <div class="col-span-3 lg:col-span-4 lg:border-l">
            <div class="h-full px-4 py-6 lg:px-8">
              <RouterView />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Menu from "@/views/layout/menu.vue";
import Sidebar from "@/views/layout/side.vue";
</script>
