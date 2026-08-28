
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-da8a5.firebaseapp.com",
  projectId: "interview-da8a5",
  storageBucket: "interview-da8a5.firebasestorage.app",
  messagingSenderId: "118085641843",
  appId: "1:118085641843:web:0126118154eb856e85ac06"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}