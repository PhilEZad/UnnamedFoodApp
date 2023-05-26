import { Injectable } from '@angular/core';
import {FireAuthService} from "../fire-auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotAuthenticatedGuardService {

  constructor(private authService: FireAuthService, public snack: MatSnackBar, private router: Router) { }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.userIsLoggedIn()) {
      this.snack.open('You are already signed in. Redirecting to recipe book...', 'Close', { duration: 1000 })
      this.router.navigate(['/recipes']); //Logged-in users should not be able to access homepage/login page
      return false;
    }
    !this.authService.userIsLoggedIn();
    return true; //Allow access to page
  }

}
