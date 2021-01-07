import firebase from "firebase/app";
import 'firebase/auth'

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDbvDaiazS5fJVcFu5l0AbhUvx8GBYsnYs",
    authDomain: "directory-list-77c3f.firebaseapp.com",
    projectId: "directory-list-77c3f",
    storageBucket: "directory-list-77c3f.appspot.com",
    messagingSenderId: "226712188132",
    appId: "1:226712188132:web:fa08f3bf4591fc888368f1",
    measurementId: "G-M1KYMXZGZ4"
};
// Initialize Firebase
let app = null
if (!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig);
}

export default firebase;
