import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-assignment-success',
  templateUrl: './assignment-success.component.html',
  styleUrls: ['./assignment-success.component.css']
})
export class AssignmentSuccessComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialog.closeAll();
  }

}
