import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChDbcXK8boS-Cgb42aoqCcUuk3gX1LEgE",
    authDomain: "e-comerce-e25c0.firebaseapp.com",
    projectId: "e-comerce-e25c0",
    storageBucket: "e-comerce-e25c0.appspot.com",
    messagingSenderId: "685862901781",
    appId: "1:685862901781:web:48510874eebef734bd561c",
    measurementId: "G-1K0X6Y23YW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };