import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../service/course.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  courseFormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private httpClient: HttpClient,
              private courseService: CourseService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.courseFormGroup = this.fb.group({
      'id': [null],
      'name': ['', Validators.required],
      'ects': ['', Validators.required],
    });

    // TODO: change to Service
    if (id) {
      this.httpClient.get('/api/course/' + id + '/get').subscribe((response) => {
        this.courseFormGroup.patchValue(response);
      });
    }
  }

  createCourse() {
    const course = this.courseFormGroup.value;

    if (course.id) {
      this.courseService.updateCourse(course).subscribe(() => {
        alert('updated successfully');
      });
    } else {
      this.courseService.createCourse(course).subscribe((response: any) => {
        alert('created successfully');
        this.router.navigate(['course-form/' + response.id]);
      });
    }
  }

}
