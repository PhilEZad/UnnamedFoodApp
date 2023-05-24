import { FirebaseAppSettings, FirebaseOptions } from '@angular/fire/app';
import { FirestoreSettings } from '@angular/fire/firestore/firebase';
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyC4VwRsZVj0u6Pgsbcsbp6AoXIRI-YIfP4',
    authDomain: 'foodlet-a2c4b.firebaseapp.com',
    projectId: 'foodlet-a2c4b',
    storageBucket: 'foodlet-a2c4b.appspot.com',
    messagingSenderId: '574930730941',
    appId: '1:574930730941:web:91fc718b51af7c0fc5dcd4',
    measurementId: 'G-92WP0BYW85',
  },
};

export const fireconfig: FirebaseOptions = {
  apiKey: 'AIzaSyC4VwRsZVj0u6Pgsbcsbp6AoXIRI-YIfP4',
  authDomain: 'foodlet-a2c4b.firebaseapp.com',
  projectId: 'foodlet-a2c4b',
  storageBucket: 'foodlet-a2c4b.appspot.com',
  messagingSenderId: '574930730941',
  appId: '1:574930730941:web:91fc718b51af7c0fc5dcd4',
  measurementId: 'G-92WP0BYW85',
};

export const firestoreConfig: FirestoreSettings = {};
