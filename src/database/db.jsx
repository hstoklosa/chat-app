import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3uF6lvAcwR3AROAiSozopai8QuAhXjig",
  authDomain: "chat-react-48855.firebaseapp.com",
  projectId: "chat-react-48855",
  storageBucket: "chat-react-48855.appspot.com",
  messagingSenderId: "202538553047",
  appId: "1:202538553047:web:0fba94ffb01dc9e1062a92"
};

const app = initializeApp(firebaseConfig);