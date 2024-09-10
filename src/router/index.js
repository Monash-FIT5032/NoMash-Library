import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import AccessDeniedView from '../views/AccessDeniedView.vue';
import { store } from '../store'; // 假设 store 是默认导出
import FirebaseSigninView from '../views/FirebaseSigninView.vue'; // 确保路径正确
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'; // 确保路径正确

const routes = [
  {
    path: '/FireLogin', // 确保所有路径以 '/' 开头
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister', // 确保所有路径以 '/' 开头
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDeniedView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.isAuthenticated) {
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;