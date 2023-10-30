// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";



import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDL1RtBLPr7vqQ_WwnA-qDDmJLBEAzTsAw",
  authDomain: "t-devah.firebaseapp.com",
  projectId: "t-devah",
  storageBucket: "t-devah.appspot.com",
  messagingSenderId: "611751574736",
  appId: "1:611751574736:web:fdcaabd72bb3faf46972d5",
  measurementId: "G-Q8RSJTC2HH"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
