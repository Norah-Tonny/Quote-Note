// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVLt55FN4p0fBpaOv3-Z1VGOOIyz-ouYs",
  authDomain: "qoute-note.firebaseapp.com",
  projectId: "qoute-note",
  storageBucket: "qoute-note.appspot.com",
  messagingSenderId: "509004541452",
  appId: "1:509004541452:web:70107030cfd2a6a82e4829",
  measurementId: "G-LWYF6ZNEC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);