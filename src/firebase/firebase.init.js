// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKGk83C-HLoSiJAFcSk1N_Swxd-mmEao4",
  authDomain: "simple-firebase-99d58.firebaseapp.com",
  projectId: "simple-firebase-99d58",
  storageBucket: "simple-firebase-99d58.appspot.com",
  messagingSenderId: "277113219840",
  appId: "1:277113219840:web:ae6189e809bc6d2408e1e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// console.log(app);

export default { app }