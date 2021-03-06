import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseService} from '../service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: any[];
  displayedColumns = ['name', 'ects', 'sws', 'id'];

  constructor(private httpClient: HttpClient, private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe((response: any[]) => {
      this.courses = response;
    });
  }

  deleteCourse(course: any) {
    this.courseService.deleteCourse(course).subscribe(() => {
      this.ngOnInit();
    });
  }

}
