import { Component } from '@angular/core';
import {FireAuthService} from "../../../services/fire-auth.service";

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent {
  registerEmail: any;
  registerPassword: any;
  registerPasswordConfirm: any;

  constructor(private authService: FireAuthService) {
  }

  createAccount() {
    if(this.registerPassword == this.registerPasswordConfirm) {
      this.authService.register(this.registerEmail, this.registerPassword)
    } else
    {
      alert("Passwords must match")
    }
  }
}
