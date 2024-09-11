import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDGSQtcLTY5ncHjEJ8FdV1SMn7aXpqQgE",
  authDomain: "week7-jianyuzhang.firebaseapp.com",
  projectId: "week7-jianyuzhang",
  storageBucket: "week7-jianyuzhang.appspot.com",
  messagingSenderId: "260737091643",
  appId: "1:260737091643:web:f9d92e2f36d05e39c9741e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
app.config.devtools = true;