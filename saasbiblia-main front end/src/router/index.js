import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AutoreS from '../views/AutoreS.vue'
import CategoriaS from '../views/CategoriaS.vue'
import EditoraS from '../views/EditoraS.vue'
import LivroS from '../views/LivroS.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/autores",
      name: "autores",
      component: AutoreS,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaS,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditoraS,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivroS,
    }
  ],
});

export default router
