// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnvN6Bov_JmyWzPBdPjXm_UP0_lmTCls0",
  authDomain: "neflix-gpt-cf24d.firebaseapp.com",
  projectId: "neflix-gpt-cf24d",
  storageBucket: "neflix-gpt-cf24d.firebasestorage.app",
  messagingSenderId: "431351036470",
  appId: "1:431351036470:web:60d272b822b0c2f0737697",
  measurementId: "G-HSRZJ4QRXZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, auth };
