import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcUxwGVu5H-4xKvo4_2dbgKcCGscqaR8E",
    authDomain: "geofinmap.firebaseapp.com",
    projectId: "geofinmap",
    storageBucket: "geofinmap.appspot.com",
    messagingSenderId: "366650940217",
    appId: "1:366650940217:web:7c7cbb27838840c54e26e8",
    measurementId: "G-BVXVWBT848"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const authentication = firebaseApp.auth();
const database = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { authentication, provider, database };
