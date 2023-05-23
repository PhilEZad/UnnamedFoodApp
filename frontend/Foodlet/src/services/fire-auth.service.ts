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

  logIn(email: string, password: string)
  {
    return this.fbAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        //TODO: Route to default page
      })
      .catch((error) =>
        {
          this.lastError = error.code
          console.log(error.message)
        }
      )
  }

  register(email: string, password: string)
  {
    return this.fbAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
      {
        this.logIn(email, password)
        //TODO: Route to usersetting page
      })
      .catch((error) =>
        {
          this.lastError = error.code
        }
      )
  }

  signOut() {
    return this.fbAuth.signOut()
      .then((result) =>
      {
        //TODO: Route to default page
      })
  }

  getError(): any {
    return this.lastError
  }
}
