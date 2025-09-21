
// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA1QLUOE3kET11Q5QbmYV4xSEnyPHRDJC4",
  authDomain: "scan2print-1cabc.firebaseapp.com",
  projectId: "scan2print-1cabc",
  storageBucket: "scan2print-1cabc.firebasestorage.app",
  messagingSenderId: "598000734925",
  appId: "1:598000734925:web:13f233261b65db20da0f84",
  measurementId: "G-LRRNS0PKCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Auth instance
const auth = getAuth(app);

export { auth };
