import { Component } from '@angular/core';
import { FireAuthService } from "../../../services/fire-auth.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent {
  loginMail: any;
  loginPassword: any;

  constructor(
    private authService: FireAuthService,
    private dialogRef: MatDialog) {
  }

  loginAccount() {
    this.authService.LogIn(this.loginMail, this.loginPassword)
    this.dialogRef.closeAll()
  }
}
