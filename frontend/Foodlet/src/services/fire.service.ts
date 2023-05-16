import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

import axios from 'axios';
import { ToastController } from '@ionic/angular';

export const config = {
  apiKey: 'AIzaSyC4VwRsZVj0u6Pgsbcsbp6AoXIRI-YIfP4',
  authDomain: 'foodlet-a2c4b.firebaseapp.com',
  projectId: 'foodlet-a2c4b',
  storageBucket: 'foodlet-a2c4b.appspot.com',
  messagingSenderId: '574930730941',
  appId: '1:574930730941:web:91fc718b51af7c0fc5dcd4',
  measurementId: 'G-92WP0BYW85',
};

@Injectable({
  providedIn: 'root',
})
export class FireService {
  firebaseApplication;
  firestore: firebase.firestore.Firestore;
  auth: firebase.auth.Auth;
  storage: firebase.storage.Storage;
  currentlySignedInUserAvatarURL: string =
    'https://wbi.net.au/wp-content/uploads/2019/04/person-icon-silhouette-png-12-1-e1555982192147.png';
  baseUrl: string = 'http://127.0.0.1:5001/fstack23/us-central1/api/';
  messages: any[] = [];

  constructor(private toastController: ToastController) {
    this.firebaseApplication = firebase.initializeApp(config);
    this.firestore = firebase.firestore();
    this.auth = firebase.auth();
    this.storage = firebase.storage();

    this.auth.useEmulator('http://localhost:9099');
    this.firestore.useEmulator('localhost', 8080);
    this.storage.useEmulator('localhost', 9199);

    this.auth.onAuthStateChanged((user) => {
      if (user) {
      }
    });
  }
}
