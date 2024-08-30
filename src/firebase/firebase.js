import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; 
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbfVof00rHII6iNz6MD2vVG5NMpG3hNbw",
  authDomain: "clone-464c7.firebaseapp.com",
  projectId: "clone-464c7",
  storageBucket: "clone-464c7.appspot.com",
  messagingSenderId: "880093142817",
  appId: "1:880093142817:web:f63ed863665d2ab90fa860",
  measurementId: "G-YSJL39138Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
// const analytics = getAnalytics(app);

export {app, auth}; 