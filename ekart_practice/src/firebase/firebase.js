import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDDLuWSaxFbFThv8ByTtBajhGW8eabAgc4",
    authDomain: "auth-af45f.firebaseapp.com",
    databaseURL: "https://auth-af45f.firebaseio.com",
    projectId: "auth-af45f",
    storageBucket: "auth-af45f.appspot.com",
    messagingSenderId: "855230511184",
    appId: "1:855230511184:web:b7e27932a8b7d31810b955",
    measurementId: "G-LRE698D95N"
  };

  firebase.initializeApp(firebaseConfig)
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  
  const provider = new firebase.auth.FacebookAuthProvider()
  export function signInWithGoogle() {
      auth.signInWithPopup(provider)
  }
