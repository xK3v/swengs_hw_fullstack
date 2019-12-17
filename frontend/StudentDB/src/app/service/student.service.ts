import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {
  }

  getStudents() {
    return this.httpClient.get('/api/student/list');
  }

  createStudent(student: any) {
    return this.httpClient.post('/api/student/create', student);
  }

  updateStudent(student: any) {
    return this.httpClient.put('/api/student/' + student.id +  'update', student);
  }

  deleteStudent(student: any) {
    return this.httpClient.delete('/api/student/' + student.id + '/delete');
  }
}
