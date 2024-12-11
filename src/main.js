import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import PrimeVue and theme
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

// Initialize Firebase (without directly importing firebaseApp if not needed)
import './firebase/init';  // This will initialize Firebase from init.js

// Create Vue app
const app = createApp(App);

// PrimeVue setup
app.use(PrimeVue, { theme: { preset: Aura } });

// Use Vue Router
app.use(router);

// Mount the app
app.mount('#app');
