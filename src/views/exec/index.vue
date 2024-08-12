<script setup>
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs/index.js";
import ExecStep from "@/views/exec/components/execStep.vue";
import ExecResult from "@/views/exec/components/execResult.vue";
</script>

<template>
  <div class="h-full">
    <Tabs default-value="exec" class="h-full space-y-6">
      <div class="space-between flex items-center">
        <TabsList>
          <TabsTrigger value="exec" class="relative">
            执行
          </TabsTrigger>
          <TabsTrigger value="table">
            统计
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent
          value="exec"
          class="border-none p-0 outline-none"
      >
        <ExecStep />
      </TabsContent>
      <TabsContent
          value="table"
          class="border-none p-0 outline-none"
      >
        <ExecResult />
      </TabsContent>
    </Tabs>
  </div>
</template>

<style scoped>

</style>
