// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0J7yKScnb1z-k5ovoJZ-P3CAdU5ag1DU",
  authDomain: "neoteric-drive.firebaseapp.com",
  projectId: "neoteric-drive",
  storageBucket: "neoteric-drive.appspot.com",
  messagingSenderId: "349372488466",
  appId: "1:349372488466:web:57b56e8909c23c91c9f1cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  provider = new GoogleAuthProvider()
const auth  = getAuth()

export {app,provider,auth}