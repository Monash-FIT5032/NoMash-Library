import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import PrimeVue
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

// Import Firebase
import { initializeApp } from "firebase/app";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsz0Cd6CwZgSepQ82IGp2NaSfQlD3AwHo",
  authDomain: "rutvika-ba31e.firebaseapp.com",
  projectId: "rutvika-ba31e",
  storageBucket: "rutvika-ba31e.appspot.com",
  messagingSenderId: "823892598275",
  appId: "1:823892598275:web:b9f701520627f750d63836"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Create Vue app
const app = createApp(App);

// PrimeVue setup
app.use(PrimeVue, { theme: { preset: Aura } });

// Use Vue Router
app.use(router);

// Mount the app
app.mount('#app');
