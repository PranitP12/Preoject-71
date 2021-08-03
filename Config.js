import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAgbbdfJ6neSGy1uG55uCBbODe7SeuVrhs",
    authDomain: "story-hub-23a65.firebaseapp.com",
    databaseURL: "https://story-hub-23a65.firebaseio.com",
    projectId: "story-hub-23a65",
    storageBucket: "story-hub-23a65.appspot.com",
    messagingSenderId: "287018491821",
    appId: "1:287018491821:web:ef4518078609144ea00b24"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db ;