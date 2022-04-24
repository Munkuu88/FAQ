import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = {
  apiKey: "AIzaSyAdyuZVdOCRoCEW6lFLdd6jDmxXlqu0Vpo",
  databaseURL: "https://faq-project-28b5b-default-rtdb.firebaseio.com",
  authDomain: "faq-project-28b5b.firebaseapp.com",
  projectId: "faq-project-28b5b",
  storageBucket: "faq-project-28b5b.appspot.com",
  messagingSenderId: "564305809793",
  appId: "1:564305809793:web:b4a4acfe0d70e9c8d81880",
  measurementId: "G-J9HJC96LQ1",
};

const firebase = getApps().length === 0 ? initializeApp(firebaseApp) : getApp();

const db = getFirestore(firebase);
const auth = getAuth(firebase);

export { db, auth };
