// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTuQI4lXdPLJ1J1J7_7PuD-fa4EiitYeg",
  authDomain: "todoapp-555c1.firebaseapp.com",
  projectId: "todoapp-555c1",
  storageBucket: "todoapp-555c1.appspot.com",
  messagingSenderId: "236572985550",
  appId: "1:236572985550:web:08b1425040e9ef0394689f",
  measurementId: "G-F6GW6PXG21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
