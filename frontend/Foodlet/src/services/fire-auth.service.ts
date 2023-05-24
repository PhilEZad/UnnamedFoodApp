import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  lastError: string = '';
  auth: Auth;

  constructor(
    private fbAuth: Auth,
    public snack: MatSnackBar,
    private router: Router
  ) {
    this.auth = fbAuth;
  }

  logIn(email: string, password: string):boolean {  //TODO: Strange error here. Fix and consider routing in component
    signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        this.router.navigate(['/']);
        return true;
      })
      .catch((error) => {
        this.snack.open(error.message, 'Close', {duration: 5000});
        this.lastError = error.code;
        console.log(error.message);
        return false;
      });
    return false;
  }


  //TODO: Strange error here. Fix and consider routing in component
  /*
   inject() must be called from an injection context such as a constructor,
   a factory function, a field initializer, or
   a function used with `EnvironmentInjector#runInContext`.
   Find more at https://angular.io/errors/NG0203

   https://stackoverflow.com/questions/60685286/inject-must-be-called-from-an-injection-context-when-using-angular-library-in
   https://stackoverflow.com/questions/62764264/error-inject-must-be-called-from-an-injection-context-but-cant-find-origin
   */
  register(email: string, password: string): boolean {  //Error (auth/network-request-failed) when trying to register
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        this.logIn(email, password);
        this.router.navigate(['/']);
        return true;
      })
      .catch((error) => {
        this.snack.open(error.message, 'Close', {duration: 5000});
        this.lastError = error.code;
        console.log(error.message);
        return false;
      });
    return false;
  }

  signOut() { //TODO: Fix and consider routing in component. Does not redirect to home page
    this.auth.signOut().then((result) => {
      this.router.navigate(['/']);
    });
  }

  getError(): any {
    return this.lastError;
  }

  userIsLoggedIn() {
    return this.auth.currentUser != null;
  }
}
