import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  retrieveCourseOptions() {
    return this.http.get <any[]>('/api/course/options');
  }
}
