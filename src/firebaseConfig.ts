import {useState, useEffect} from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from './components/toast';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzFQlLeuC9CZTelxCgg9n-cwYafMM6-QM",
  authDomain: "delishcooking-db.firebaseapp.com",
  projectId: "delishcooking-db",
  storageBucket: "delishcooking-db.appspot.com",
  messagingSenderId: "358493328807",
  appId: "1:358493328807:web:6952bfe550b962e8b39282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export async function registerUser(email: string, password: string) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res);
    return true;
  } catch(error) {
      console.log(error);

      return false;
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch(error) {
      console.log(error);
      return false;
  }
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, function (user) {
      if(user) {
        resolve(user);
      } else {
        resolve(null);
      }
      unsubscribe();
    });
  })
}

export function logoutUser() {
  return signOut(auth);
}

export default getFirestore();
