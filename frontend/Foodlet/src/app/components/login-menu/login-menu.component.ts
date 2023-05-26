import { Component } from '@angular/core';
import { FireAuthService } from 'src/services/fire-auth.service';
import { MatDialog } from '@angular/material/dialog';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss'],
})
export class LoginMenuComponent {
  loginMail: any;
  loginPassword: any;

  constructor(
    public authService: FireAuthService,
    private dialogRef: MatDialog
  ) {}

  loginAccount() {
    this.authService.logIn(this.loginMail, this.loginPassword);
    this.dialogRef.closeAll();
  }

}
