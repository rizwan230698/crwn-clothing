import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBs7PXQFKxwKNjInrv95IWvopbbdEfq8gI",
  authDomain: "crwn-db-73248.firebaseapp.com",
  databaseURL: "https://crwn-db-73248.firebaseio.com",
  projectId: "crwn-db-73248",
  storageBucket: "crwn-db-73248.appspot.com",
  messagingSenderId: "412479346993",
  appId: "1:412479346993:web:7aaa27fd9960df0e6cb810",
  measurementId: "G-LD657CSYQ0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
