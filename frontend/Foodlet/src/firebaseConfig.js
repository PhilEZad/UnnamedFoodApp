// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyC4VwRsZVj0u6Pgsbcsbp6AoXIRI-YIfP4",
  authDomain: "foodlet-a2c4b.firebaseapp.com",
  projectId: "foodlet-a2c4b",
  storageBucket: "foodlet-a2c4b.appspot.com",
  messagingSenderId: "574930730941",
  appId: "1:574930730941:web:91fc718b51af7c0fc5dcd4",
  measurementId: "G-92WP0BYW85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
