
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlEh4wWib9C9AA9VUlQCa-IDMGz2gCUHw",
  authDomain: "forumwebapps.firebaseapp.com",
  projectId: "forumwebapps",
  storageBucket: "forumwebapps.appspot.com",
  messagingSenderId: "500322159419",
  appId: "1:500322159419:web:af5f1171e8cdbc8d94c51e"
};

// Initialize Firebase
const app      = initializeApp(firebaseConfig);
const auth     = getAuth(app);
const provider = new GoogleAuthProvider();
 

export { auth, provider };