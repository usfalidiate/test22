// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuiI_iGt2xS_qyB1-BNiz5vbE2DZxQqo8",
  authDomain: "test22-cfb5a.firebaseapp.com",
  projectId: "test22-cfb5a",
  storageBucket: "test22-cfb5a.appspot.com",
  messagingSenderId: "402772440636",
  appId: "1:402772440636:web:22a491d2308bd14e00b539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
