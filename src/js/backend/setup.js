// do set up and initialisation
// use import.meta.env.VARIABLE_NAME to access env variables (Vite-specific)
// someValue = import.meta.env.VITE_SOME_VALUE

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2om3X2xGBtaCfHBGAgJ8NRNxSfrinjGk",
  authDomain: "baasstarter.firebaseapp.com",
  projectId: "baasstarter",
  storageBucket: "baasstarter.appspot.com",
  messagingSenderId: "1007721538233",
  appId: "1:1007721538233:web:2a8d5d5143381371e67168",
  measurementId: "G-79PXMFJRC5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);