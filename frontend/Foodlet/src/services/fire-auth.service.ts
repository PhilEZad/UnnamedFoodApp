import { Injectable } from '@angular/core';
import firebase from "firebase/compat";
import 'firebase/compat/auth';

import * as config from '../firebaseConfig.js'

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  auth: firebase.auth.Auth;

  constructor() {
    this.auth = firebase.auth();
    this.auth.onAuthStateChanged((user) =>{
      if (user) {

      }
    })
  }

  register(email: string, password: string)
  {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string)
  {
    this.auth.signInWithEmailAndPassword(email, password)
  }

  signOut(){
    this.auth.signOut();
  }
}
