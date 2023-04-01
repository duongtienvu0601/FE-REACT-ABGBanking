// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpH_vd0eidPDGWPB0tys_r3lajjVF0fDM",
  authDomain: "abcd-3b393.firebaseapp.com",
  databaseURL:
    "https://abcd-3b393-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "abcd-3b393",
  storageBucket: "abcd-3b393.appspot.com",
  messagingSenderId: "824760925740",
  appId: "1:824760925740:web:a4f0e261b2f337bd78db89",
  measurementId: "G-Q6ZWE50K8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }