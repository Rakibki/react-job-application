// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAli93jSUJSv_rflftl2jHHi5m_AU9Xwp0",
  authDomain: "job-apply-1f8c3.firebaseapp.com",
  projectId: "job-apply-1f8c3",
  storageBucket: "job-apply-1f8c3.appspot.com",
  messagingSenderId: "1098233591051",
  appId: "1:1098233591051:web:8fcb4b0294fb76b76a9e0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth