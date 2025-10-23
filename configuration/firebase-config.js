// configuration/firebase-config.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCcFOx7bV6FOjqQTE7pe2uNVOdfN9KQbYg",
  authDomain: "blogging-908b0.firebaseapp.com",
  projectId: "blogging-908b0",
  storageBucket: "blogging-908b0.appspot.com", // ✅ fixed .app to .appspot.com
  messagingSenderId: "655674176673",
  appId: "1:655674176673:web:b65380bde9d735ad312ce0",
  measurementId: "G-R10KN48XYX"
};

// Initialize app safely
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
