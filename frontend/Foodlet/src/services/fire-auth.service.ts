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
    public snack: MatSnackBar
  ) {
    this.auth = fbAuth;
  }

  logIn(email: string, password: string):boolean {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        new Router().navigate(['/']);
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

  register(email: string, password: string): boolean {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        this.logIn(email, password);
        new Router().navigate(['/']);
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

  signOut() {
    this.auth.signOut().then((result) => {
      new Router().navigate(['/']);
    });
  }

  getError(): any {
    return this.lastError;
  }

  userIsLoggedIn() {
    return this.auth.currentUser != null;
  }
}
