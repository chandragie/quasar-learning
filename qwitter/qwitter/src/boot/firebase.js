// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNbBi3BjCINWnaee4Y6jl_Mkw_cHHdbxM",
  authDomain: "tutorial-spa.firebaseapp.com",
  databaseURL: "https://tutorial-spa-default-rtdb.firebaseio.com",
  projectId: "tutorial-spa",
  storageBucket: "tutorial-spa.appspot.com",
  messagingSenderId: "556518877249",
  appId: "1:556518877249:web:cd5eb65d692f550339fec0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;
