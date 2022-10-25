// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdE2MLjAt8liwkG9eUAsxDIaKz1cW8Z-g",
  authDomain: "easy-learning-1c6cd.firebaseapp.com",
  projectId: "easy-learning-1c6cd",
  storageBucket: "easy-learning-1c6cd.appspot.com",
  messagingSenderId: "841592180846",
  appId: "1:841592180846:web:96ca39264be7f51091567f",
  measurementId: "G-QZBY2H4D6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;