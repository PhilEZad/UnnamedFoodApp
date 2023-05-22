import { Injectable } from '@angular/core';
import { FireService } from "./fire.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import auth = firebase.auth;

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(
    private fbAuth: AngularFireAuth
  )
  {}

  LogIn(email: string, password: string)
  {
    return this.fbAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result)
      })
      .catch((error) =>
      window.alert(error.message))
  }

  Register(email: string, password: string)
  {
    return this.fbAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
      {
        window.alert('Registration successful')
        console.log(result.user)
      })
      .catch((error) =>
        {
          window.alert(error.message)
        }
      )
  }
}
