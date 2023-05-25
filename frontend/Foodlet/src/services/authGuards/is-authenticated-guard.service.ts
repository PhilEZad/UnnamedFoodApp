import { Injectable } from '@angular/core';
import {CanActivate, Router, UrlTree} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FireAuthService} from "../fire-auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuardService {

  constructor(private authService: FireAuthService, public snack: MatSnackBar, private router: Router) { }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.userIsLoggedIn()) {
      this.snack.open('You must be logged in to access this page', 'Close', { duration: 2000 })
      this.router.navigate(['/home']);
      return false;
    }
    this.authService.userIsLoggedIn();
    return true; //Allow access to page
  }
}
