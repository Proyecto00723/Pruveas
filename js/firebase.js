import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCCDSrE_hWvYYgjNwTX85leeU3vHBLBJsY",
    authDomain: "stylishsteps-10fc4.firebaseapp.com",
    projectId: "stylishsteps-10fc4",
    storageBucket: "stylishsteps-10fc4.firebasestorage.app",
    messagingSenderId: "32645603346",
    appId: "1:32645603346:web:ae022c525a85aaf7ad38cb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);