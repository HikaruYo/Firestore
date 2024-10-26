// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCv2iSoUjuUIg-zqlu48spWCT45EGpsSfg",
    authDomain: "learn-firebase-dba09.firebaseapp.com",
    databaseURL: "https://learn-firebase-dba09-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "learn-firebase-dba09",
    storageBucket: "learn-firebase-dba09.appspot.com",
    messagingSenderId: "1050276116709",
    appId: "1:1050276116709:web:aee47a2d6cbbe16c973c0c",
    measurementId: "G-309SY5EMRH"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const cong = initializeApp(firebaseConfig);

export default cong;