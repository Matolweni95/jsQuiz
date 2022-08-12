import { Component, OnInit } from '@angular/core';
import { OperatorHintComponent } from '../operator-hint/operator-hint.component'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OperatorSuccessComponent } from '../operator-success/operator-success.component'; 
import { FailboxComponent } from '../failbox/failbox.component';
import { ValueAssignmentaltComponent } from '../value-assignmentalt/value-assignmentalt.component'; 
import { AssignmentHintComponent } from '../assignment-hint/assignment-hint.component';
import { AssignmentSuccessComponent } from '../assignment-success/assignment-success.component';

@Component({
  selector: 'app-value-assignment',
  templateUrl: './value-assignment.component.html',
  styleUrls: ['./value-assignment.component.css']
})
export class ValueAssignmentComponent {

  animal!: string;
  name!: string;
  result = "";
  title = 'jsQuiz';
  test:any;

  array:any [] = ["1"];
  answers: any [] = ["a=b;",
                    ]

  myForm!: FormGroup;

  constructor (private fb: FormBuilder, public dialog: MatDialog){
    this.myForm = this.fb.group({
      value: [''], 
      
    });
  }

  openDialog() {
   this.dialog.open(AssignmentHintComponent);
  }

  submit(){
    let type = (<HTMLInputElement>document.getElementById('a')).value;
    this.test = type.replace(/ /g,'');
 
    for(let i = 0; i < this.answers.length; i++){
      if(this.test == this.answers[i]){
        this.result = "pass";
        break
      }else if (this.test == "a=7;"){
        this.result = "alt";
      }else {
        this.result = "fail";
      }
    }

    if(this.result == "pass"){
      this.dialog.open(AssignmentSuccessComponent);
    }else if (this.result == "alt") {
      this.dialog.open(ValueAssignmentaltComponent)
    }else {
      this.dialog.open(FailboxComponent);
    }
    
     
  }

}
