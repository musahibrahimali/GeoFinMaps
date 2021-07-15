import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjkxejcQmbZD_mKUPxJv-MoxktnGqJEw0",
    authDomain: "geofinmaps-gh.firebaseapp.com",
    projectId: "geofinmaps-gh",
    storageBucket: "geofinmaps-gh.appspot.com",
    messagingSenderId: "489470082081",
    appId: "1:489470082081:web:86a90986e5fc85445cb760",
    measurementId: "G-DJ84148BR7"
};

const firebaseClient = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

export default firebaseClient;