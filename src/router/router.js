import { createRouter, createWebHashHistory } from "vue-router";

import AboutPage from '@/modules/pokemon/pages/AboutPage'
import ListPage from '@/modules/pokemon/pages/ListPage'
import PokemonPage from '@/modules/pokemon/pages/PokemonPage'

const routes = [
    { path: '/', component: ListPage },
    { path: '/about', component: AboutPage },
    { path: '/id', component: PokemonPage },
  ]


  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router