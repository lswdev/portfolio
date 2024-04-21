
// import Vue from 'vue'
// import VueRouter from 'vue-router';


export const router = {
  mode: 'history',
  routes: [
    {
      path: '/main',
      components:() => import('@/views/Main.vue')
    },
  ]
};