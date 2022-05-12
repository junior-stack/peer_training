// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "@firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyf85O3VnXnPdhCQvSH584DsTT8mT6qSU",
  authDomain: "dapp-training-backend.firebaseapp.com",
  projectId: "dapp-training-backend",
  storageBucket: "dapp-training-backend.appspot.com",
  messagingSenderId: "886608631239",
  appId: "1:886608631239:web:67124aca4eb554bea875e2",
  measurementId: "G-7YV0590YFW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const functions = getFunctions();
