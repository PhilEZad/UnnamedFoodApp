import { Component } from '@angular/core';
import { FireAuthService } from "../../../services/fire-auth.service";
import { MatDialog } from "@angular/material/dialog";
import { LoginMenuComponent } from "../login-menu/login-menu.component";
import { CreateMenuComponent } from "../create-menu/create-menu.component";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  constructor(
    private auth: FireAuthService,
    private dialogRef: MatDialog
  ) {
  }

  loginMenu() {
    this.dialogRef.open(LoginMenuComponent)
  }

  registerMenu() {
    this.dialogRef.open(CreateMenuComponent, {
      height: '400px',
      width: '500px'
    })
  }

  signOut() {
    this.auth.signOut()
  }
}
