import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm5ioi7eON0fFWt_YsnKu97ZpyIjyNrM4",
  authDomain: "pract-8bb6b.firebaseapp.com",
  projectId: "pract-8bb6b",
  storageBucket: "pract-8bb6b.appspot.com",
  messagingSenderId: "489420242243",
  appId: "1:489420242243:web:ca3b07c5c4e3d77d9c83f6"
};
  



initializeApp(firebaseConfig);

const db = getFirestore();
export default db