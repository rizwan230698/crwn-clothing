import firebase from "firebase/app";
import "firebase/auth";

import axios from "axios";

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
//********************creating userProfile if it does not exist in database********/
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth || !userAuth.displayName) return;

  const { uid } = userAuth;
  const response = await axios.get(`http://localhost:8080/user/${uid}`);

  if (!response.data.exist) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      await axios.post("http://localhost:8080/user", {
        displayName,
        email,
        uid,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
};
//***************************************************************************/

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
