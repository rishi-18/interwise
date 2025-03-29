// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9GgYnAHjDsjy_OqduTJ_xckyGGaqv-5g",
  authDomain: "interwise-eacf0.firebaseapp.com",
  projectId: "interwise-eacf0",
  storageBucket: "interwise-eacf0.firebasestorage.app",
  messagingSenderId: "588930457897",
  appId: "1:588930457897:web:5df509c2bf06f9b5c11738",
  measurementId: "G-GE2HXN10ZM"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);