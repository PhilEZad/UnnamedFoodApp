import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  lastError: string = ""

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
        this.lastError = error)
  }

  Register(email: string, password: string)
  {
    return this.fbAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
      {

      })
      .catch((error) =>
        {
          this.lastError = error.code
          console.log(error.code)
        }
      )
  }

  SignOut() {
    return this.fbAuth.signOut()
      .then((result) =>
      {
        window.alert('Successfully signed out')
      })
  }

  getError(): any {
    return this.lastError
  }
}
