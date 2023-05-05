import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-Phj0PtvkpNNdkdWcD0HgfyHCu1LHlBo",
  authDomain: "products-cc84e.firebaseapp.com",
  projectId: "products-cc84e",
  storageBucket: "products-cc84e.appspot.com",
  messagingSenderId: "108588717861",
  appId: "1:108588717861:web:5dbe83c5d86506395daccc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
