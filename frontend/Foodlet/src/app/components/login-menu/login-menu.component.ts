import { Component } from '@angular/core';
import { FireAuthService } from "../../../services/fire-auth.service";

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent {
  loginMail: any;
  loginPassword: any;

  constructor(private authService: FireAuthService) {
  }

  loginAccount() {
    this.authService.signIn(this.loginMail, this.loginPassword)
  }
}
