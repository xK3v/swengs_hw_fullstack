import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  retrieveCourseOptions() {
    return this.httpClient.get <any[]>('/api/course/options');
  }

  getCourses() {
    return this.httpClient.get('/api/course/list');
  }

  getCourse(id: any) {
    return this.httpClient.get('/api/course/' + id + '/get');
  }

  createCourse(course: any) {
    return this.httpClient.post('/api/course/create', course);
  }

  updateCourse(course: any) {
    console.log(course);
    return this.httpClient.put('/api/course/' + course.id +  '/update', course);
  }

  deleteCourse(course: any) {
    return this.httpClient.delete('/api/course/' + course.id + '/delete');
  }
}
