import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCxmkotoEfQVsNGy0O8IWu96ijqGXL9PSI",
  authDomain: "semimarket-a3ad5.firebaseapp.com",
  projectId: "semimarket-a3ad5",
  storageBucket: "semimarket-a3ad5.appspot.com",
  messagingSenderId: "935085876085",
  appId: "1:935085876085:web:c613ea410c0ca94446693c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)