import { Component } from '@angular/core';
import {CreateMenuComponent} from "../../components/create-menu/create-menu.component";
import {MatDialog} from "@angular/material/dialog";
import {LoginMenuComponent} from "../../components/login-menu/login-menu.component";
import {FireAuthService} from "../../../services/fire-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private dialogRef: MatDialog, private authService: FireAuthService, private router: Router) {

  }

  registerMenu() {
    this.dialogRef.open(CreateMenuComponent, {
      height: '550px',
      width: '450px'
    })
  }

  loginMenu() {
    this.dialogRef.open(LoginMenuComponent, {
      height: '350px',
      width: '250px'
    })
  }

  userNotLoggedIn(): boolean {
    return !this.authService.userIsLoggedIn();
  }

  goToMealPlanner() {
    this.router.navigate(['/plan']);
  }

  goToRecipes() {
    this.router.navigate(['/recipes']);
  }
}
