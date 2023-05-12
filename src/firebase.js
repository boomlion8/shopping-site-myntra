// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSUVJmTHe0vDuj1Ijp4zb8-Evemm-2kyc",
  authDomain: "myntra-clone-22332.firebaseapp.com",
  projectId: "myntra-clone-22332",
  storageBucket: "myntra-clone-22332.appspot.com",
  messagingSenderId: "175756684164",
  appId: "1:175756684164:web:2c3066c7dac50978a90bd1",
  measurementId: "G-Q7BTMHJ013",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
