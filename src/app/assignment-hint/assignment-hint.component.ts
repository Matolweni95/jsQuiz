import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-assignment-hint',
  templateUrl: './assignment-hint.component.html',
  styleUrls: ['./assignment-hint.component.css']
})
export class AssignmentHintComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }

}
