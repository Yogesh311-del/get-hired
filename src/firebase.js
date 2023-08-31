import firebase from "./firebase"

const firebaseConfig ={
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyACoiME7jFiIRusrxQjXuDBBb3Ux15xiRA",
    authDomain: "get-hired-3a122.firebaseapp.com",
    projectId: "get-hired-3a122",
    storageBucket: "get-hired-3a122.appspot.com",
    messagingSenderId: "941072730039",
    appId: "1:941072730039:web:ace1d41e2ebfc0a9714a32",
    measurementId: "G-CLJZF4T3RG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;
