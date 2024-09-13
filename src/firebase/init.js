// src/Firebase/init.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Auth

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
console.log("Firebase App Initialized:", firebaseApp);

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp); // Initialize Auth

// Export Firebase App, Firestore, and Auth
export { firebaseApp, db, auth };
