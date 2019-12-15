import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  movieFormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.movieFormGroup = this.fb.group({
      'id': [null],
      'last_name': ['', Validators.required],
      'first_name': ['', Validators.required],
      'dob': [null],
      'department': [null],
      'courses': [[]],
    });
  }

}
