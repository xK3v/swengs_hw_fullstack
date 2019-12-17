import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentFormComponent} from './student-form/student-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'student-list', pathMatch: 'full'},
  { path: 'student-list', component: StudentListComponent},
  { path: 'student-form', component: StudentFormComponent},
  { path: 'student-form/:id', component: StudentFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
