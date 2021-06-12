import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlyzdcV1ytnweHLe3lZryp_9Y2MKG8TlM",
    authDomain: "clone-1ee2b.firebaseapp.com",
    projectId: "clone-1ee2b",
    storageBucket: "clone-1ee2b.appspot.com",
    messagingSenderId: "609840882334",
    appId: "1:609840882334:web:e43ac5d0f97c695b2dd18f",
    measurementId: "G-PCDQHYYJY5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }