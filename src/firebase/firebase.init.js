// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPLW7UdJ4hRtHiRfiB7yTqGtsWSn4w5lw",
  authDomain: "simple-firebase-b6c7e.firebaseapp.com",
  projectId: "simple-firebase-b6c7e",
  storageBucket: "simple-firebase-b6c7e.firebasestorage.app",
  messagingSenderId: "963348471114",
  appId: "1:963348471114:web:e56744540a5cc34482b5b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
