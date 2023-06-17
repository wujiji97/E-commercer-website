// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB8WNVoLxpfDoPHmZ9KlTfF2qUaIuNTrLM",
  authDomain: "store-3cc58.firebaseapp.com",
  projectId: "store-3cc58",
  storageBucket: "store-3cc58.appspot.com",
  messagingSenderId: "408961495196",
  appId: "1:408961495196:web:3e510a8255026718893d59",
  measurementId: "G-C19EV60TYY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
