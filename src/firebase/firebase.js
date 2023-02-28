// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx3MD58Hkt6I9KxsHWZJGi3LB4QjHsNQw",
  authDomain: "chat-1e59b.firebaseapp.com",
  projectId: "chat-1e59b",
  storageBucket: "chat-1e59b.appspot.com",
  messagingSenderId: "773227386456",
  appId: "1:773227386456:web:1f49d6c19045a117519c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();