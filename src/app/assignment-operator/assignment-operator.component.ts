import { Component, OnInit } from '@angular/core';
import { OperatorHintComponent } from '../operator-hint/operator-hint.component'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OperatorSuccessComponent } from '../operator-success/operator-success.component'; 
import { FailboxComponent } from '../failbox/failbox.component';

@Component({
  selector: 'app-assignment-operator',
  templateUrl: './assignment-operator.component.html',
  styleUrls: ['./assignment-operator.component.css']
})
export class AssignmentOperatorComponent {
  animal!: string;
  name!: string;
  result = "";
  title = 'jsQuiz';
  test:any;

  array:any [] = ["1"];
  answers: any [] = ["a=7;",
                    ]

  myForm!: FormGroup;

  constructor (private fb: FormBuilder, public dialog: MatDialog){
    this.myForm = this.fb.group({
      value: [''], 
      
    });
  }

  openDialog() {
   this.dialog.open(OperatorHintComponent);
  }

  submit(){
    let type = (<HTMLInputElement>document.getElementById('a')).value;
    this.test = type.replace(/ /g,'');

    for(let i = 0; i < this.answers.length; i++){
      if(this.test == this.answers[i]){
        this.result = "pass";
        break
      }else if(this.test != this.answers[i]){
        this.result = "fail";
      }
    }

    if(this.result == "pass"){
      this.dialog.open(OperatorSuccessComponent);
    }else{
      this.dialog.open(FailboxComponent);
    }
    
     
  }

}
