import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyDaftlKOQm1VF-eecf9I89zFxRmC2YfhjU",
    authDomain: "college-notes-85e6b.firebaseapp.com",
    projectId: "college-notes-85e6b",
    storageBucket: "college-notes-85e6b.appspot.com",
    messagingSenderId: "420750121422",
    appId: "1:420750121422:web:b07830b542e7544a9d339f",
    measurementId: "G-LR04X4DZFM"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
