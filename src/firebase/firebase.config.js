// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRq-5BFHj5CSzGLcTyHGDjzfktb9sj5Tc",
  authDomain: "fir-fighter-aef75.firebaseapp.com",
  projectId: "fir-fighter-aef75",
  storageBucket: "fir-fighter-aef75.firebasestorage.app",
  messagingSenderId: "32700078375",
  appId: "1:32700078375:web:43bc73a722a630f4a0f102",
  measurementId: "G-PBFBZ7FRB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);