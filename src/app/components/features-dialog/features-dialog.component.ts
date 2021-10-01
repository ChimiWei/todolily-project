import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-features-dialog',
  templateUrl: './features-dialog.component.html',
  styleUrls: ['./features-dialog.component.scss']
})
export class FeaturesDialogComponent implements OnInit {

  constructor(private dialogref: MatDialogRef<FeaturesDialogComponent>) { }

  ngOnInit(): void {
  }


  close() {
    this.dialogref.close()
  }
}
