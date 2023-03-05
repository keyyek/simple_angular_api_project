import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  students: Student[] = [];
  constructor(private router: Router) {}
  addStudentRequest: Student = {
    id: '',
    firstName: '',
    lastName: '',
    phone: 0,
    email: '',
    gender: '',
    profilePhoto: '',
  };

  ngOnInit(): void {}

  addStudent(): void {
    if (localStorage['students_data']) {
      this.addStudentRequest.id = uuidv4();
      this.students = JSON.parse(localStorage['students_data']);
      this.students.push(this.addStudentRequest);
      localStorage.setItem('students_data', JSON.stringify(this.students));
      this.router.navigate(['/']);
    } else {
      console.log('Error3');
      this.router.navigate(['/']);
    }
  }
}
