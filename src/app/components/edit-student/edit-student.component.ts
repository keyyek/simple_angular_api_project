import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';

import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  students: Student[] = [];
  addStudentRequest: Student | undefined  = {
    id: '',
    firstName: '',
    lastName: '',
    phone: 0,
    email: '',
    gender: '',
    profilePhoto: '',
  };
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getLocalStorageData();
  }
  

  getLocalStorageData() {
    if (localStorage['students_data']) {
      this.students = JSON.parse(localStorage['students_data']);
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');
          console.log('the id is: ' + id);
          this.addStudentRequest = this.students.find((currentStudent) => {
            // this.addStudentRequest =currentStudent
            return currentStudent.id === id;

            // return currentStudent;
          });
        },
      });
    }
  }

  editStudent() {}

  updateStudent() {
    const studentss = this.students.map((current) => {
      if (current.id === this.addStudentRequest?.id) {
        return this.addStudentRequest;
      } else {
        return current;
      }
    });
    localStorage.setItem('students_data', JSON.stringify(studentss));

    this.router.navigate(['/']);
  }

  deleteStudent() {
    const studentss = this.students.filter((current) => {
      return current.id !== this.addStudentRequest?.id;
    });
    localStorage.setItem('students_data', JSON.stringify(studentss));

    this.router.navigate(['/']);
  }

  // getStudentLocalStorageData(id: string) {
  //   let localStorage_data = localStorage.getItem()
  // }
  getStudentLocalStorageData(): void {
    if (localStorage['students_data']) {
      this.students = JSON.parse(localStorage['students_data']);

      // this.students.push(this.addStudentRequest);

      localStorage.setItem('students_data', JSON.stringify(this.students));

      this.router.navigate(['/']);
    } else {
      console.log('Error4');
      this.router.navigate(['/']);
    }
  }
}
