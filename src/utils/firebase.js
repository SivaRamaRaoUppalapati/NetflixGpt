// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYcrT3qsLhTtPKDiLkyo3-u3T37QWFmLY",
  authDomain: "netflixgpt-ed64c.firebaseapp.com",
  projectId: "netflixgpt-ed64c",
  storageBucket: "netflixgpt-ed64c.firebasestorage.app",
  messagingSenderId: "651684215100",
  appId: "1:651684215100:web:ba5fbc4aa3d6b79ec0c639",
  measurementId: "G-KV4VKQDHNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();