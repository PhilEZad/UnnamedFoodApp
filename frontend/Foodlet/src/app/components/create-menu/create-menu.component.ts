import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../../../services/fire-auth.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    public snack: MatSnackBar,
    private authService: FireAuthService
  ) {}

  createAccount() {
    if (this.registerPassword == this.registerPasswordConfirm) {
      let successful = this.authService.register(
        this.registerEmail,
        this.registerPassword
      );
      if (successful)
        this.snack.open('Account created successfully!', 'Close', {
          duration: 5000,
        });
      this.dialogRef.closeAll();
    } else {
      this.snack.open('Account could not be created, try again.', 'Close', {
        duration: 5000,
      });
    }
  }
}
