import {collection, addDoc } from 'firebase/firestore'
import { usersCollection, auth } from './firebase.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";


export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
    console.log("1", name, email,password)
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res)
      const user = res.user;
      await addDoc(usersCollection, {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
      return user.uid
    } catch (err) {
      console.error(err);
    }
  };