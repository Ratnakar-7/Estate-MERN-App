// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsk18eUxsPTHND61oK3hD2PXQP1Y87n40",
  authDomain: "mega-estate-mern.firebaseapp.com",
  projectId: "mega-estate-mern",
  storageBucket: "mega-estate-mern.appspot.com",
  messagingSenderId: "889352296726",
  appId: "1:889352296726:web:268d97305ffa8035a85837"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);