import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HintboxComponent } from './hintbox/hintbox.component';
import { SuccessboxComponent } from './successbox/successbox.component';
import { FailboxComponent } from './failbox/failbox.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animal!: string;
  name!: string;
  result = "";
  title = 'jsQuiz';
  test:any;

  array:any [] = ["1"];
  answers: any [] = ["let values = [0,1,2,3,4,5];",
                     "let values = [0, 1, 2, 3, 4, 5];",
                     "const values = [0,1,2,3,4,5];",
                     "const values = [0, 1, 2, 3, 4, 5];"]

  myForm!: FormGroup;

  constructor (private fb: FormBuilder, public dialog: MatDialog){
    this.myForm = this.fb.group({
      value: [''], 
      
    });
  }

  openDialog() {
   this.dialog.open(HintboxComponent);
  }

  



  submit(){
    let type = (<HTMLInputElement>document.getElementById('a')).value;
    this.test = type;
    console.log(this.answers);
    console.log(this.test)
    for(let i = 0; i < this.answers.length; i++){
      if(this.test == this.answers[i]){
        this.result = "pass";
        break
      }else if(this.test != this.answers[i]){
        this.result = "fail";
      }
    }

    if(this.result == "pass"){
      this.dialog.open(SuccessboxComponent);
    }else{
      this.dialog.open(FailboxComponent);
    }
    
     
  }
}



