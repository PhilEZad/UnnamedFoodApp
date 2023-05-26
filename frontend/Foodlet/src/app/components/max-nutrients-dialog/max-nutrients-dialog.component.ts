import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-max-nutrients-dialog',
  templateUrl: './max-nutrients-dialog.component.html',
  styleUrls: ['./max-nutrients-dialog.component.scss']
})
export class MaxNutrientsDialogComponent {

  maxNutrients: number = 0

  constructor(
    public dialogRef: MatDialogRef<MaxNutrientsDialogComponent>
  )
  { }


  closeDialog() {
    this.dialogRef.close(this.maxNutrients)
  }


}
