import { Component, OnInit } from '@angular/core';
import { FireAuthService } from "../../../services/fire-auth.service";
import { MatDialog } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})
export class CreateMenuComponent implements OnInit {

  formControlGroup: FormGroup = new FormGroup({})
  registerEmail: any;
  registerPassword: any;
  registerPasswordConfirm: any;
  registerFirstName: any;
  registerLastName: any;
  registerGender: any;

  constructor(
    private authService: FireAuthService,
    private dialogRef: MatDialog,
  ) {f
  }

  ngOnInit(): void {
    this.formControlGroup = new FormGroup({
      registerName: new FormControl([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z0-9]+$')
      ])
    })
  }

  createAccount() {
    if(this.registerPassword == this.registerPasswordConfirm) {
      this.authService.Register(this.registerEmail, this.registerPassword)
      this.dialogRef.closeAll()
    } else
    {

    }
  }
}
