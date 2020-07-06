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
      title: "Pretest CPE34 - PreHome",
    },
  },
  {
    path: "/pre_test/explanation",
    name: "Explanation",
    component: () => import('../views/Explanation.vue'),
    meta: {
      title: "Pretest CPE34 - Explanation",
      Auth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue'),
    meta: {
      title: "Pretest CPE34 - Login",
    },
  },
  {
    path: "/pre_test",
    name: "PreTest",
    component: () => import('../views/PreTest.vue'),
    meta: {
      title: "Pretest CPE34 - PreTest",
      Auth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.matched.some((record) => record.meta.Auth)) {
    if ((to.name === "PreTest") & (from.name === "Explanation")) {
      next();
    } else if ((to.name === "Explanation") & (from.name === "Login")) {
      next();
    } else if ((from.name === "PreTEst") & (to.name === "PreHome")) {
      next();
    } else {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    }
  } else {
    next();
  }
});

export default router;
