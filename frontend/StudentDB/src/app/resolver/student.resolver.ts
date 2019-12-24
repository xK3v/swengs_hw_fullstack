import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {StudentService} from '../service/student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentResolver implements Resolve<Observable<any>> {
  constructor(private studentService: StudentService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.studentService.getStudent(route.paramMap.get('id'));
  }
}
