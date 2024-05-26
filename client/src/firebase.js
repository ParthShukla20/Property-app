// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB3TX4KQpLAkhAQbvOt6lsuT60A0yXz0A",
  authDomain: "property-sale-9af74.firebaseapp.com",
  projectId: "property-sale-9af74",
  storageBucket: "property-sale-9af74.appspot.com",
  messagingSenderId: "344988123691",
  appId: "1:344988123691:web:6bbde806da97368128a06e",
  measurementId: "G-4FM43N6F1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseApp = initializeApp(firebaseConfig);