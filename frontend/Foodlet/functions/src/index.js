// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// eslint-disable-next-line @typescript-eslint/no-var-requires
import { auth, logger } from "firebase-functions";
import firebaseAdmin from "firebase-admin";

const firebaseConfig = {
  apiKey: "AIzaSyC4VwRsZVj0u6Pgsbcsbp6AoXIRI-YIfP4",
  authDomain: "foodlet-a2c4b.firebaseapp.com",
  projectId: "foodlet-a2c4b",
  storageBucket: "foodlet-a2c4b.appspot.com",
  messagingSenderId: "574930730941",
  appId: "1:574930730941:web:91fc718b51af7c0fc5dcd4",
  measurementId: "G-92WP0BYW85",
};

export const userRecordOnRegister = auth.user().onCreate((user, context) => {
  logger.log(user);

  let app = firebaseAdmin.initializeApp(firebaseConfig);

  //firebaseAdmin.firestore(app).collection("users").doc(user.uid).set({
  //  email: user.email,
  //  displayName: user.displayName,
  //  photoURL: user.photoURL,
  //  uid: user.uid,
  //});
});
