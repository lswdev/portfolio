/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
// import { store } from "@/store/index.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/intro',
      name: 'intro',
      component: () => import('@/views/Intro.vue'),
    },{
      path: '/effect',
      name: 'effect',
      component: () => import('@/views/EffectView.vue'),
    },{
      path: '/',
      redirect: '/intro'
    },
  ]
});