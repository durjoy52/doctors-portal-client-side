// Import the functions you need from the SDKs you need
import { getAuth, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY0,
  authDomain: process.env.REACT_APP_AUTHDOMAIN0,
  projectId: process.env.REACT_APP_PROJECTID0,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET0,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID0,
  appId: process.env.REACT_APP_APPID0,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
