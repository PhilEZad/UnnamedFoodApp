import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

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

  SignOut() {
    return this.fbAuth.signOut()
      .then((result) =>
      {
        window.alert('Successfully signed out')
      })
  }
}
