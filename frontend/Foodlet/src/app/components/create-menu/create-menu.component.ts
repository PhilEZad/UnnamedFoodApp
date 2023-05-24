import { Component } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth } from '@angular/fire/auth';
import { getFunctions, httpsCallable } from '@angular/fire/functions';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

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

  constructor(private dialogRef: MatDialog) {}

  createAccount() {
    if (this.registerPassword == this.registerPasswordConfirm) {
      const create = createUserWithEmailAndPassword(
        getAuth(),
        this.registerEmail,
        this.registerPassword
      );

      create
        .then(async (result) => {
          const CreateDB = httpsCallable(getFunctions(), 'onCreateUser');
          await CreateDB(result.user);
        })
        .catch((error) => {
          this.lastError = error.code;
          console.log(error.message);
        })
        .finally(() => {
          this.dialogRef.closeAll();
        });
    }
  }
}
