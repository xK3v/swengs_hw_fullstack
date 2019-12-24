import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {DepartmentService} from '../service/department.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentOptionsResolver implements Resolve<Observable<any>> {
  constructor(private departmentService: DepartmentService) {
  }

  resolve() {
    return this.departmentService.retrieveDepartmentOptions();
  }
}
