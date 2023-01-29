// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCG_IZ6Jpx22c3CGGBZOnGHSrHnjnuUFO0",
    authDomain: "bubbly-12c3a.firebaseapp.com",
    projectId: "bubbly-12c3a",
    storageBucket: "bubbly-12c3a.appspot.com",
    messagingSenderId: "746755944279",
    appId: "1:746755944279:web:079a0f470bfbbddad9d812",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);