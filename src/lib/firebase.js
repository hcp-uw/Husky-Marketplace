// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrsle8cdjpH6G7cChL2rtmmxYvQGv8yIU"/* import.meta.env.VITE_API_KEY */,
  authDomain: "hcpproject-c066b.firebaseapp.com",
  projectId: "hcpproject-c066b",
  storageBucket: "hcpproject-c066b.firebasestorage.app",
  messagingSenderId: "499353061126",
  appId: "1:499353061126:web:7aefd139b6f77e61720087",
  measurementId: "G-41LHV7JL0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()