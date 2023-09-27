// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: 'AIzaSyCyFPrq4c7FtYSntpkFqOCXeE1Bl03SzEA',

  authDomain: 'colective-iscool.firebaseapp.com',

  projectId: 'colective-iscool',

  storageBucket: 'colective-iscool.appspot.com',

  messagingSenderId: '423977582808',

  appId: '1:423977582808:web:4a2df0105bb6502d35d7ad',

};

// Initialize Firebase
// En esta variable esta guardada la app de Firebase.
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export default firebaseApp;
// En esta variable le instalo el auth a la app.
