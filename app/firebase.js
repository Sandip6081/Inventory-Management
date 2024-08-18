// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG_PjFAatj2HEum0_Up9umXLLOTWoLKV8",
  authDomain: "inventory-management-a33f0.firebaseapp.com",
  projectId: "inventory-management-a33f0",
  storageBucket: "inventory-management-a33f0.appspot.com",
  messagingSenderId: "179834712187",
  appId: "1:179834712187:web:fa3c9a255b899e41c9f2de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);