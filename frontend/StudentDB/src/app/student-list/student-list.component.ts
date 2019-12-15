import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: any[];
  displayedColumns = ['last_name', 'first_name', 'department_name', 'id'];

  constructor(private httpClient: HttpClient, private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe((response:any[]) => {
      this.students = response;
    });
  }

}
