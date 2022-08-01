import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore"
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig ={
    apiKey: "AIzaSyB5gHYxFP21fdGf9JR3WdQE5jY2V3TnTbA",
    authDomain: "queuingsystem-b9e52.firebaseapp.com",
    projectId: "queuingsystem-b9e52",
    storageBucket: "queuingsystem-b9e52.appspot.com",
    messagingSenderId: "215932044947",
    appId: "1:215932044947:web:6510a0a8eff06e51ae6f66",
    measurementId: "G-971V5M64LN"
};

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
