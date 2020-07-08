import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from 'vue-cookies'

Vue.use(VueRouter);
Vue.use(VueCookies);

const routes = [
  {
    path: "/",
    name: "PreHome",
    component: () => import('../views/PreHome.vue'),
    meta: {
      title: "CPE34 - PreHome",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue'),
    meta: {
      title: "CPE34 - Login",
    },
  },
  {
    path: "/test",
    name: "test",
    component: () => import('../views/test.vue'),
    meta: {
      title: "CPE34 - Test",
      Auth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
