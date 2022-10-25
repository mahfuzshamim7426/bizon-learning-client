// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxJtuZtxS9RJOA4wN6L4Uo1loYKverXeQ",
    authDomain: "bizon-learning.firebaseapp.com",
    projectId: "bizon-learning",
    storageBucket: "bizon-learning.appspot.com",
    messagingSenderId: "1000312709155",
    appId: "1:1000312709155:web:b064b7fe0328b5d3571196",
    measurementId: "G-BP0VFDLXKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;