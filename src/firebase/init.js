import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQr1VUo2iQQ4OQVPqeiwbvWNXxqZAt96E",
    authDomain: "week7-yangzou.firebaseapp.com",
    projectId: "week7-yangzou",
    storageBucket: "week7-yangzou.appspot.com",
    messagingSenderId: "1056355156501",
    appId: "1:1056355156501:web:9d10e78ff31a82d7bcc41c"
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db