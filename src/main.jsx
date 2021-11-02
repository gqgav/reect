import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRk0Rvm0g9dpFtkXle9Z5FDX145ACNh9w",
  authDomain: "cart-13656.firebaseapp.com",
  databaseURL: "https://cart-13656-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cart-13656",
  storageBucket: "cart-13656.appspot.com",
  messagingSenderId: "712947806817",
  appId: "1:712947806817:web:ee42f123a0331e4c61f020",
  measurementId: "G-71BSJ5T53W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
