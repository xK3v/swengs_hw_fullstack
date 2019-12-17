import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {StudentService} from '../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartmentService} from '../service/department.service';
import {CourseService} from '../service/course.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentFormGroup;
  departmentOptions;
  courseOptions;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router, private route: ActivatedRoute,
              private studentService: StudentService, private departmentService: DepartmentService, private courseService: CourseService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.courseService.retrieveCourseOptions().subscribe((result) => {
      this.courseOptions = result;
    });

    this.departmentService.retrieveDepartmentOptions().subscribe((result) => {
      this.departmentOptions = result;
    });

    this.studentFormGroup = this.fb.group({
      'id': [null],
      'last_name': ['', Validators.required],
      'first_name': ['', Validators.required],
      'dob': [null],
      'department': [null],
      'courses': [[]],
    });


    // TODO: change to Service
    if (id) {
      this.httpClient.get('/api/student/' + id + '/get').subscribe((response) => {
        this.studentFormGroup.patchValue(response);
      })
    }
  }

  createStudent() {
    const student = this.studentFormGroup.value;

    if (student.id) {
      this.studentService.updateStudent(student).subscribe(() => {
      // this.httpClient.put('/api/student/' + student.id +  'update', student).subscribe(() => {
        alert('updated successfully');
      });
    } else {
      this.studentService.createStudent(student).subscribe((response: any) => {
      // this.httpClient.post('/api/student/create', student).subscribe((response: any) => {
        alert('created successfully');
        this.router.navigate(['student-form/' + response.id]);
      });
    }
  }

}