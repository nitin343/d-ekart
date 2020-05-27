import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAEobccDgI4iDT8iMWHoLcO6yd4klCTmpk",
    authDomain: "dekart-840b5.firebaseapp.com",
    databaseURL: "https://dekart-840b5.firebaseio.com",
    projectId: "dekart-840b5",
    storageBucket: "dekart-840b5.appspot.com",
    messagingSenderId: "650103368",
    appId: "1:650103368:web:c848bcb31288283732a67d",
    measurementId: "G-JH63YXYWVY"

};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
  };




  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  .catch(function(error)  {


    var message = error.message
    console.log(error);
    console.log(error.status);
    
    
  })
  
  export default firebase;