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
    apiKey: "AIzaSyDNeN0AIcXw0aAiwc6S7472y7YMjHzbV94",
    authDomain: "tienda-virtual-883ef.firebaseapp.com",
    databaseURL: "https://tienda-virtual-883ef-default-rtdb.firebaseio.com",
    projectId: "tienda-virtual-883ef",
    storageBucket: "tienda-virtual-883ef.firebasestorage.app",
    messagingSenderId: "871120614985",
    appId: "1:871120614985:web:0274d91497b7f1e3d33198"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
