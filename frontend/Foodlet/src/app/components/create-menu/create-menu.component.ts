import { Component } from '@angular/core';
import {FireAuthService} from "../../../services/fire-auth.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent {
  registerEmail: any;
  registerPassword: any;
  registerPasswordConfirm: any;
  registerName: any;

  constructor(
    private authService: FireAuthService,
    private dialogRef: MatDialog,
  ) {
  }

  createAccount() {
    if(this.registerPassword == this.registerPasswordConfirm) {
      this.authService.register(this.registerEmail, this.registerPassword)
      this.dialogRef.closeAll()
    } else
    {
    }
  }
}
