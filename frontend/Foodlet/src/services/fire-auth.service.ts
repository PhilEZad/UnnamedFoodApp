import { Injectable } from '@angular/core';
import firebase from "firebase/compat";
import 'firebase/compat/auth';
import {FireService} from "./fire.service";

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(private firebase: FireService) {
    if (firebase.auth.currentUser==null) {}
  }

  register(email: string, password: string)
  {
    this.firebase.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string)
  {
    this.firebase.auth.signInWithEmailAndPassword(email, password)
  }

  signOut(){
    this.firebase.auth.signOut();
  }
}
