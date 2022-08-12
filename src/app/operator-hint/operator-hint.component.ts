import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-operator-hint',
  templateUrl: './operator-hint.component.html',
  styleUrls: ['./operator-hint.component.css']
})
export class OperatorHintComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }

}
