import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAeQAaML5VyRLKaMi-BKA8Y1256H5Wvmag",
  authDomain: "eshop-c5b11.firebaseapp.com",
  projectId: "eshop-c5b11",
  storageBucket: "eshop-c5b11.appspot.com",
  messagingSenderId: "792361206764",
  appId: "1:792361206764:web:7d2609fd3961dac28836c9",
  // measurementId: 'G-XJZHCFT94Y',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
