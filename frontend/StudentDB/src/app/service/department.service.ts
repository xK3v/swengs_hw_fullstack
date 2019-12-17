import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {
  }

  retrieveDepartmentOptions() {
    return this.http.get <any[]>('/api/department/options');
  }
}
