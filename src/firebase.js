import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4hhIfj-umOsZLmb73hMRh6twsp5CspzU",
    authDomain: "clone-a1b34.firebaseapp.com",
    databaseURL: "https://clone-a1b34-default-rtdb.firebaseio.com",
    projectId: "clone-a1b34",
    storageBucket: "clone-a1b34.appspot.com",
    messagingSenderId: "665386353228",
    appId: "1:665386353228:web:d211e54c28e1efc19d2ae9",
    measurementId: "G-Y4PL1BNVQV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }