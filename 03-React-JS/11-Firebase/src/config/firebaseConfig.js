import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGXl123SpUD7J-5ppHiwS0PUqmjlT3r3E",
  authDomain: "class-project-f3c6c.firebaseapp.com",
  projectId: "class-project-f3c6c",
  storageBucket: "class-project-f3c6c.appspot.com",
  messagingSenderId: "687400361908",
  appId: "1:687400361908:web:d37117b9162d145ae01ce1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };