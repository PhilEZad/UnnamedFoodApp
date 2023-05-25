import { Component } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth } from '@angular/fire/auth';
import {
  connectFunctionsEmulator,
  getFunctions,
  httpsCallable,
} from '@angular/fire/functions';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FireAuthService } from 'src/services/fire-auth.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss'],
})
export class CreateMenuComponent {
  registerEmail: any;
  registerPassword: any;
  registerPasswordConfirm: any;
  registerFirstName: any;
  registerLastName: any;
  registerGender: string = 'Male';
  lastError: any;

  constructor(
    private dialogRef: MatDialog,
    private authService: FireAuthService
  ) {}

  createAccount() {
    if (this.registerPassword == this.registerPasswordConfirm) {
      let successful = this.authService.register(
        this.registerEmail,
        this.registerPassword
      );
      if (successful) this.dialogRef.closeAll();
    }
  }
}
