// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCdGoLROIFmSxm2paKBPABzch0G1n7i-c",
  authDomain: "eve-f0dbd.firebaseapp.com",
  projectId: "eve-f0dbd",
  storageBucket: "eve-f0dbd.appspot.com",
  messagingSenderId: "14829769908",
  appId: "1:14829769908:web:12be767cf593acb701b3e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };