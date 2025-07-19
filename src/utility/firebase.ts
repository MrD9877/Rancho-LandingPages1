// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3aF0TQD0TdTn_8wiJj7vt4xZjofVdwMU",
  authDomain: "contact-me-7d413.firebaseapp.com",
  projectId: "contact-me-7d413",
  storageBucket: "contact-me-7d413.firebasestorage.app",
  messagingSenderId: "660052736552",
  appId: "1:660052736552:web:afb9f0749095d2ee57531d",
  measurementId: "G-EJ6M47CSRE",
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);
export const fireStoreDB = getFirestore(fireBaseApp);
