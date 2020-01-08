import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {StudentService} from '../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartmentService} from '../service/department.service';
import {CourseService} from '../service/course.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentFormGroup;
  departmentOptions;
  courseOptions;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar,
              private studentService: StudentService, private departmentService: DepartmentService, private courseService: CourseService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    const data = this.route.snapshot.data;

    this.courseOptions = data.courseOptions;
    this.departmentOptions = data.departmentOptions;

    this.studentFormGroup = this.fb.group({
      'id': [null],
      'last_name': ['', Validators.required],
      'first_name': ['', Validators.required],
      'gender': [null, Validators.required],
      'dob': [null],
      'latitude': [null],
      'longitude': [null],
      'department': [null],
      'courses': [[], this.courseCountValidator()],
      'active': [true],
    });

    if (data.student) {
      this.studentFormGroup.patchValue(data.student);
    }
  }

  courseCountValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = control.value.length > 10;
      return forbidden ? {'coursesGT10': {value: control.value}} : null;
    };
  }

  createStudent() {
    const student = this.studentFormGroup.value;

    if (student.id) {
      this.studentService.updateStudent(student).subscribe(() => {
        // this.httpClient.put('/api/student/' + student.id +  'update', student).subscribe(() => {
        // alert('updated successfully');
        this.snackBar.open('updated successfully', 'OKAY', {
          duration: 3000
        });
      });
    } else {
      this.studentService.createStudent(student).subscribe((response: any) => {
        // this.httpClient.post('/api/student/create', student).subscribe((response: any) => {
        // alert('created successfully');
        this.snackBar.open('created successfully', 'OKAY', {
          duration: 3000
        });
        this.router.navigate(['student-form/' + response.id]);
      });
    }
  }

}
