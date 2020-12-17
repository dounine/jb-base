import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Operator from '../views/Operator.vue'
import Handler from '../views/handle/Handler.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/operator/:platform',
  //   name: 'Operator',
  //   component: Operator,
  //   children: [
  //     {
  //       path: ':symbol/:contractType/:direction/:offset',
  //       name: 'Handler',
  //       component: Handler
  //     }
  //   ]
  // },
  { path: '', redirect: "/operator" }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
