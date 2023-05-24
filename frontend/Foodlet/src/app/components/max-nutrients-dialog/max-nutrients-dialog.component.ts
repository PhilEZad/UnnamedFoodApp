import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-max-nutrients-dialog',
  templateUrl: './max-nutrients-dialog.component.html',
  styleUrls: ['./max-nutrients-dialog.component.scss']
})
export class MaxNutrientsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MaxNutrientsDialogComponent>
  )
  { }



}
