import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  lastError: string = '';
  auth: Auth;

  constructor(private fbAuth: Auth) {
    this.auth = fbAuth;
  }

  logIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        new Router().navigate(['/']);
      })
      .catch((error) => {
        this.lastError = error.code;
        console.log(error.message);
      });
  }

  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        this.logIn(email, password);
        new Router().navigate(['/']);
      })
      .catch((error) => {
        this.lastError = error.code;
        console.log(error.message);
      });
  }

  signOut() {
    this.auth.signOut().then((result) => {
      new Router().navigate(['/']);
    });
  }

  getError(): any {
    return this.lastError;
  }
}
