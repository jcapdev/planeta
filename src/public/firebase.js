// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
//import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js'

import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0//firebase-firestore.js"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ5zi2ne_uXhEcJVJ7-8wUkhZICMWXePY",
  authDomain: "planeta-beta-f8361.firebaseapp.com",
  projectId: "planeta-beta-f8361",
  storageBucket: "planeta-beta-f8361.appspot.com",
  messagingSenderId: "227630890898",
  appId: "1:227630890898:web:d1464fc7b7bf2cc1c0cb4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log(app);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const collection = getFirestore(app)
//const auth = getAuth();