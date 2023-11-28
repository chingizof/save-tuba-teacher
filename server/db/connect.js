//this file connects to firebase
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCa8CJLDlxZav6LylYflDDQQbL_m8tTZGs",
    authDomain: "savetuba-5e519.firebaseapp.com",
    projectId: "savetuba-5e519",
    storageBucket: "savetuba-5e519.appspot.com",
    messagingSenderId: "218900793188",
    appId: "1:218900793188:web:a1cc3aa38d180fc6815c71",
    measurementId: "G-HNBQXNS4XM"
  };


  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app)
  const usersCollection = collection(db, "users")


  export { db, auth, usersCollection }
