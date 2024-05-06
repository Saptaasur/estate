// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-79006.firebaseapp.com",
  projectId: "mern-estate-79006",
  storageBucket: "mern-estate-79006.appspot.com",
  messagingSenderId: "748865713367",
  appId: "1:748865713367:web:1e717d01550f93e1be6c92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);