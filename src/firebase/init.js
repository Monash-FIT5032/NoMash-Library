// src/Firebase/init.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsz0Cd6CwZgSepQ82IGp2NaSfQlD3AwHo",
  authDomain: "rutvika-ba31e.firebaseapp.com",
  projectId: "rutvika-ba31e",
  storageBucket: "rutvika-ba31e.appspot.com",
  messagingSenderId: "823892598275",
  appId: "1:823892598275:web:b9f701520627f750d63836"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Export Firebase and Firestore
export { firebaseApp, db };
