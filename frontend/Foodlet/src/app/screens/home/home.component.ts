import { Component } from '@angular/core';
import {CreateMenuComponent} from "../../components/create-menu/create-menu.component";
import {MatDialog} from "@angular/material/dialog";
import {LoginMenuComponent} from "../../components/login-menu/login-menu.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private dialogRef: MatDialog) {

  }

  registerMenu() {
    this.dialogRef.open(CreateMenuComponent, {
      height: '55%',
      width: '40%'
    })
  }

  loginMenu() {
    this.dialogRef.open(LoginMenuComponent, {
      height: '40%',
      width: '20%'
    })
  }


}
