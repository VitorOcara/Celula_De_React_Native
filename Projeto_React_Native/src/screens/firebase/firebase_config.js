// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ReactNativeAyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy-7GGFPL0bEu3G58mpMbyrnoL67CDnJQ",
  authDomain: "projetomobile-3de8e.firebaseapp.com",
  databaseURL: "https://projetomobile-3de8e-default-rtdb.firebaseio.com",
  projectId: "projetomobile-3de8e",
  storageBucket: "projetomobile-3de8e.appspot.com",
  messagingSenderId: "142328837711",
  appId: "1:142328837711:web:8e922375a733183d5f1c3a",
  measurementId: "G-2SZ8ZLY4H4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, { persistence: getReactNativePersistence(ReactNativeAyncStorage)} )

const analytics = getAnalytics(app);

export {auth, app}