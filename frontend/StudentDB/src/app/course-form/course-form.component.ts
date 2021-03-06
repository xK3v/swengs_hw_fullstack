import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../service/course.service';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  courseFormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private httpClient: HttpClient,
              private courseService: CourseService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.courseFormGroup = this.fb.group({
      'id': [null],
      'name': ['', Validators.required],
      'ects': ['', Validators.required],
      'sws': [null],
      'description': [null],
      'active': [true],
    });

    if (id) {
      this.courseService.getCourse(id).subscribe((response) => {
        this.courseFormGroup.patchValue(response);
      });
    }
  }

  createCourse() {
    const course = this.courseFormGroup.value;

    if (course.id) {
      this.courseService.updateCourse(course).subscribe(() => {
        this.snackBar.open('updated successfully', 'OKAY', {
          duration: 3000
        });
      });
    } else {
      this.courseService.createCourse(course).subscribe((response: any) => {
        this.snackBar.open('created successfully', 'OKAY', {
          duration: 3000
        });
        this.router.navigate(['course-form/' + response.id]);
      });
    }
  }

}
