import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAoVbWcRn0B43aQ9AsQPbsEud215UVQz_g",
  authDomain: "crash-courses-b1bc0.firebaseapp.com",
  projectId: "crash-courses-b1bc0",
  storageBucket: "crash-courses-b1bc0.appspot.com",
  messagingSenderId: "687891548771",
  appId: "1:687891548771:web:c56bc863c5ff6c21d70656"
};

const app = initializeApp(firebaseConfig);

export default app;