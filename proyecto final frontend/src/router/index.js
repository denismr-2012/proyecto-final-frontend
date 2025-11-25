import { createRouter, createWebHistory } from 'vue-router'
import FormularioRegistro from '@/components/FormularioRegistro.vue'
import PromedioNotas from '@/components/PromedioNotas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: PromedioNotas},
    {path: '/formulario', component: FormularioRegistro}
  ],
})

export default router
