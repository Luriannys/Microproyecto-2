// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// //Import para Storage:
// import { getStorage } from "firebase/storage";
// //Import para Firestore:
// import { getFirestore } from "@firebase/firestore";
// // Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVfziGky8X8cDp1jDjPnuTjl4OpsxMmWI",
  authDomain: "microproyecto2-19be9.firebaseapp.com",
  projectId: "microproyecto2-19be9",
  storageBucket: "microproyecto2-19be9.appspot.com",
  messagingSenderId: "943266255455",
  appId: "1:943266255455:web:2efd5822b61588985d81ea"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;

// // Initialize Authenticator
// export const auth = getAuth(appFirebase);


// // Para Firestore:
// export const db = getFirestore(appFirebase);


// //Para Storage:
// export const storage = getStorage(appFirebase);
