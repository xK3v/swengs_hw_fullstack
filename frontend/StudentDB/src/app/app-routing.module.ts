import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentFormComponent} from './student-form/student-form.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseFormComponent} from './course-form/course-form.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {CourseOptionsResolver} from './resolver/course-options.resolver';
import {DepartmentOptionsResolver} from './resolver/department-options.resolver';
import {StudentResolver} from './resolver/student.resolver';


const routes: Routes = [
  {path: '', redirectTo: 'student-list', pathMatch: 'full'},
  {path: 'student-list', component: StudentListComponent, canActivate: [AuthGuard]},
  {
    path: 'student-form',
    component: StudentFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      courseOptions: CourseOptionsResolver,
      departmentOptions: DepartmentOptionsResolver,
    }
  },
  {
    path: 'student-form/:id',
    component: StudentFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      courseOptions: CourseOptionsResolver,
      departmentOptions: DepartmentOptionsResolver,
      student: StudentResolver,
    }
  },
  {path: 'course-list', component: CourseListComponent, canActivate: [AuthGuard]},
  {path: 'course-form', component: CourseFormComponent, canActivate: [AuthGuard]},
  {path: 'course-form/:id', component: CourseFormComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
