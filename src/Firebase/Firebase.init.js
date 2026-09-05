// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7dosrWwW5NFWbrJ_xUTNn9F5wiu7CUX0",
  authDomain: "dragon-news-12158.firebaseapp.com",
  projectId: "dragon-news-12158",
  storageBucket: "dragon-news-12158.firebasestorage.app",
  messagingSenderId: "745971337491",
  appId: "1:745971337491:web:68cd55c7d81aae97c372e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth; 