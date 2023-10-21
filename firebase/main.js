// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5tslS7oQoISqadZLaJjFBVB3fT7gKTEo",
    authDomain: "mobirat-4ccd0.firebaseapp.com",
    projectId: "mobirat-4ccd0",
    storageBucket: "mobirat-4ccd0.appspot.com",
    messagingSenderId: "325423153182",
    appId: "1:325423153182:web:8c460b48d32a90327eae0f",
    measurementId: "G-62FLVRQ5DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);