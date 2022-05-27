import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


// crwn-db/crwn-clothing-web-app
const firebaseConfig = {
  apiKey: "AIzaSyAS1_7vP67VE0XmGH3KfCp0NmxSOAylkqc",
  authDomain: "crwn-db-cd5b1.firebaseapp.com",
  databaseURL: "https://crwn-db-cd5b1.firebaseio.com",
  projectId: "crwn-db-cd5b1",
  storageBucket: "crwn-db-cd5b1.appspot.com",
  messagingSenderId: "280423869079",
  appId: "1:280423869079:web:1a5dabf3385c03dcf1d7d2",
  measurementId: "G-FBNG43DEDW"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google specific
// prompt: 'select_account', makes it so everytime we interact, we are forced to select account
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export  const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid )
  console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)
  console.log(userSnapshot.exists())
  
  // if user data does not exist
  // create/set the document with the userAuth data in collection
  if (!userSnapshot.exists()){
    const { displayName, email } =  userAuth;
    const createdAt = new Date();

    try {
      console.log('new user, creating document....')
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
      
    } catch (error) {
      console.log('error creating user', error.message)
    }

  }
  
  // otherwise just return user data
  return userDocRef;

}