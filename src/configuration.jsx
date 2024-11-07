import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);