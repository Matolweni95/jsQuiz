import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { HintboxComponent } from './hintbox/hintbox.component';
import { SuccessboxComponent } from './successbox/successbox.component';
import { FailboxComponent } from './failbox/failbox.component';
import { AssignmentOperatorComponent } from './assignment-operator/assignment-operator.component';
import { ArrayDelcarationComponent } from './array-delcaration/array-delcaration.component';
import { OperatorHintComponent } from './operator-hint/operator-hint.component';
import { OperatorSuccessComponent } from './operator-success/operator-success.component';
import { ValueAssignmentComponent } from './value-assignment/value-assignment.component';
import { AssignmentSuccessComponent } from './assignment-success/assignment-success.component';
import { AssignmentHintComponent } from './assignment-hint/assignment-hint.component';
import { CompleteComponent } from './complete/complete.component';
import { ValueAssignmentaltComponent } from './value-assignmentalt/value-assignmentalt.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HintboxComponent,
    SuccessboxComponent,
    FailboxComponent,
    AssignmentOperatorComponent,
    ArrayDelcarationComponent,
    OperatorHintComponent,
    OperatorSuccessComponent,
    ValueAssignmentComponent,
    AssignmentSuccessComponent,
    AssignmentHintComponent,
    CompleteComponent,
    ValueAssignmentaltComponent
  ],
  entryComponents:[
    HintboxComponent,
    SuccessboxComponent,
    FailboxComponent,
    OperatorHintComponent
  ]
  ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
