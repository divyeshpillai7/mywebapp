// Import the required Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDtnhBP9n33idMF4ZD-zRVTDRug2dcSArk",
    authDomain: "social-cf568.firebaseapp.com",
    projectId: "social-cf568",
    storageBucket: "social-cf568.firebasestorage.app",
    messagingSenderId: "554846720435",
    appId: "1:554846720435:web:1a82c9713211026c6ffbc6",
    measurementId: "G-ES72WMCZ67"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword }; // Export the necessary components



