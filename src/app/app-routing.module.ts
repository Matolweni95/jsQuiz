import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentOperatorComponent } from './assignment-operator/assignment-operator.component'; 
import { ArrayDelcarationComponent } from './array-delcaration/array-delcaration.component'; 
import { ValueAssignmentComponent } from './value-assignment/value-assignment.component';
import { CompleteComponent } from './complete/complete.component';
const routes: Routes = [
  {path: 'AssignmentOperations', component: AssignmentOperatorComponent},
  {path: '', component: ArrayDelcarationComponent},
  {path: 'ValueAssignment', component: ValueAssignmentComponent},
  {path: 'complete', component: CompleteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
