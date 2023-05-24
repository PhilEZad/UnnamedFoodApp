import { Component, OnInit } from '@angular/core';
import { FireAuthService } from "../../../services/fire-auth.service";
import { MatDialog } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent {

  registerEmail: any;
  registerPassword: any;
  registerPasswordConfirm: any;
  registerFirstName: any;
  registerLastName: any;
  registerGender: string = "Male"

  constructor(
    public authService: FireAuthService,
    private dialogRef: MatDialog,
  ) {
  }

  createAccount() {

    if(this.registerPassword == this.registerPasswordConfirm) {
      let successful = this.authService.register(this.registerEmail, this.registerPassword)
      if (successful)
        this.dialogRef.closeAll()
    }

  }
}
