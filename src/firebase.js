import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBgeQ1f8Vkpwc7kV2ThWb2u7ZjKk_7u50Y",
    authDomain: "zsormc.firebaseapp.com",
    projectId: "zsormc",
    storageBucket: "zsormc.firebasestorage.app",
    messagingSenderId: "722907247507",
    appId: "1:722907247507:web:246fa29664398ffe9cae66",
    measurementId: "G-SD2GG78NWQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);