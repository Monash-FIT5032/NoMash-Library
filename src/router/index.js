import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import { isAuthenticated } from './authentication';
import FirebaseLoginView from '@/views/FirebaseLoginView.vue';
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue';
import FirebaseLogoutView from '@/views/FirebaseLogoutView.vue';
import AddBookView from '@/views/AddBookView.vue';
import DeleteBookView from '@/views/DeleteBookView.vue';
import UpdateBookView from '@/views/UpdateBookView.vue';
import GetBookCountView from '@/views/GetBookCountView.vue';
import WeatherView from '@/views/WeatherView.vue';
import CountBookAPI from '@/views/CountBookAPI.vue';
import GetAllBookAPI from '@/views/GetAllBookAPI.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/FirebaseLogin',
    name: 'FirebaseLogin',
    component: FirebaseLoginView
  },
  {
    path: '/FirebaseRegister',
    name: 'FirebaseRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/FirebaseLogout',
    name: 'FirebaseLogout',
    component: FirebaseLogoutView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/deletebook',
    name: 'DeleteBook',
    component: DeleteBookView
  },
  {
    path: '/updatebook',
    name: 'UpdateBook',
    component: UpdateBookView
  },
  {
    path: '/getBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/WeatherCheck',
    name: 'GetWeather',
    component: WeatherView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
  {
    path: '/GetAllBookAPI',
    name: 'GetAllBookAPI',
    component: GetAllBookAPI
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



router.beforeEach((to, from, next) => {
  
    if (to.path === '/about' && !isAuthenticated.value) {
      next('/login'); // Redirect to login if not authenticated
    } else {
      next(); // Allow access
    }
  });

export default router