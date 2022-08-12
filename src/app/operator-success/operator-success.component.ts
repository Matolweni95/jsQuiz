import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-operator-success',
  templateUrl: './operator-success.component.html',
  styleUrls: ['./operator-success.component.css']
})
export class OperatorSuccessComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialog.closeAll();
  }

}
