import { createMemoryHistory, createRouter } from 'vue-router'

import ExecView from '@/views/exec/index.vue'

const routes = [
    { path: '/', component: ExecView },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
