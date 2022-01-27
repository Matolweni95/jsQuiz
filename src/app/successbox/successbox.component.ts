import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-successbox',
  templateUrl: './successbox.component.html',
  styleUrls: ['./successbox.component.css']
})
export class SuccessboxComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.dialog.closeAll();
  }

}
