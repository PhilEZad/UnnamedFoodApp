import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseStatic } from 'src/utils/firebase/firebase.static';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  lastError: string = '';

  constructor(public snack: MatSnackBar, private router: Router) {}

  logIn(email: string, password: string): boolean {
    FirebaseStatic.auth()
      .signInWithEmailAndPassword(email, password)
      .then((_) => {
        this.router.navigate(['/recipes']);
        this.snack.open("Signed in!", 'Close', { duration: 2000 });
        return true;
      })
      .catch((error) => {
        this.snack.open(error.message, 'Close', { duration: 5000 });
        this.lastError = error.code;
        console.log(error.message);
        return false;
      });

    return false;
  }

  register(email: string, password: string): boolean {
    FirebaseStatic.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['/home']);
        this.snack.open("Account created! You can login now 🎈", 'Close', { duration: 5000 });
        return true;
      })
      .catch((error) => {
        this.snack.open(error.message, 'Close', { duration: 5000 });
        this.lastError = error.code;
        console.log(error.message);
        return false;
      });
    return false;
  }

  signOut() {
    FirebaseStatic.auth()
      .signOut()
      .then((result) => {
        this.router.navigate(['/home']);
      });
  }

  getError(): any {
    return this.lastError;
  }

  userIsLoggedIn() {
    return FirebaseStatic.auth().currentUser != null;
  }
}
