
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1-9Q0gSxL08XYo7J135tLtJL_Bitr7uU",
  authDomain: "chruchsiteauth.firebaseapp.com",
  projectId: "chruchsiteauth",
  storageBucket: "chruchsiteauth.appspot.com",
  messagingSenderId: "685790351242",
  appId: "1:685790351242:web:8b8a79b7db8dd8cdf4c273",
  measurementId: "G-K57B0XXE68"
};

// Initialize Firebase
const app      = initializeApp(firebaseConfig);
const auth     = getAuth(app);
const provider = new GoogleAuthProvider();
 

export { auth, provider };