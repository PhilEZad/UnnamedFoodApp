import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'


import * as config from '../firebaseConfig.js'

import axios from 'axios';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class FireService {

  firebaseApplication;
  firestore: firebase.firestore.Firestore;
  auth: firebase.auth.Auth;
  storage: firebase.storage.Storage;
  currentlySignedInUserAvatarURL: string = "https://wbi.net.au/wp-content/uploads/2019/04/person-icon-silhouette-png-12-1-e1555982192147.png";
  baseUrl: string = "http://127.0.0.1:5001/fstack23/us-central1/api/";
  messages: any[] = [];

  constructor(private toastController: ToastController) {
    this.firebaseApplication = firebase.initializeApp(config.firebaseconfig);
    this.firestore = firebase.firestore();
    this.auth = firebase.auth();
    this.storage = firebase.storage();

    this.auth.useEmulator('http://localhost:9099');
    this.firestore.useEmulator('localhost', 8080);
    this.storage.useEmulator('localhost', 9199);

    this.auth.onAuthStateChanged((user) => {
      if (user) {

      }
    })
  }



}
