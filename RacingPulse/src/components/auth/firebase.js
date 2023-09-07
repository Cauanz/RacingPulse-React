// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBqqY9dYhirXwusDb-P4S9A9u_S5cE06UM",
   authDomain: "racingpulse-blog.firebaseapp.com",
   projectId: "racingpulse-blog",
   storageBucket: "racingpulse-blog.appspot.com",
   messagingSenderId: "232173997129",
   appId: "1:232173997129:web:131de17615093f39e64398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const auth =  getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
