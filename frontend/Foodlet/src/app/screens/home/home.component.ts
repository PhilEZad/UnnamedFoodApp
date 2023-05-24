import { Component } from '@angular/core';
import {CreateMenuComponent} from "../../components/create-menu/create-menu.component";
import {MatDialog} from "@angular/material/dialog";

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
      height: '400px',
      width: '500px'
    })
  }

}
