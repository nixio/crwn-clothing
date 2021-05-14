import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAOx--3zcEis-zBvB7tp3zsq_ix1jvA_SU",
  authDomain: "crwn-db-8b216.firebaseapp.com",
  projectId: "crwn-db-8b216",
  storageBucket: "crwn-db-8b216.appspot.com",
  messagingSenderId: "481258950070",
  appId: "1:481258950070:web:347fcf6dd7ae84877ec517",
  measurementId: "G-32VSNT3LXZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
