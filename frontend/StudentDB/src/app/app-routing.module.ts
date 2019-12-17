import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentFormComponent} from './student-form/student-form.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseFormComponent} from './course-form/course-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'student-list', pathMatch: 'full'},
  { path: 'student-list', component: StudentListComponent},
  { path: 'student-form', component: StudentFormComponent},
  { path: 'student-form/:id', component: StudentFormComponent},
  { path: 'course-list', component: CourseListComponent},
  { path: 'course-form', component: CourseFormComponent},
  { path: 'course-form/:id', component: CourseFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
