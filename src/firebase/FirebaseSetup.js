
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAHhcZ21o10JZsKM-0kUXZkep2xhqYkkCE",
  authDomain: "richinbox-ecb7f.firebaseapp.com",
  projectId: "richinbox-ecb7f",
  storageBucket: "richinbox-ecb7f.appspot.com",
  messagingSenderId: "705234483887",
  appId: "1:705234483887:web:14267c5f1e122cd395b25a",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);