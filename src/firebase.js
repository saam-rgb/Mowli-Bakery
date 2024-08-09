// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0IIwdrcG6uFP75yGTmbEIp-6trcTWPwM",
  authDomain: "mowli-bakery.firebaseapp.com",
  projectId: "mowli-bakery",
  storageBucket: "mowli-bakery.appspot.com",
  messagingSenderId: "435820971379",
  appId: "1:435820971379:web:e9cc96ec4d8e295788b106",
  measurementId: "G-ERPCRPZJ20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default app;
