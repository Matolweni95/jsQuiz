import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-value-assignmentalt',
  templateUrl: './value-assignmentalt.component.html',
  styleUrls: ['./value-assignmentalt.component.css']
})
export class ValueAssignmentaltComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialog.closeAll();
  }

}
