import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: number[] = [5, 10, 15, 20];

  students: Student[] = [];
  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.postList();
  }

  postList(): void {
    if (localStorage['students_data']) {
      this.students = JSON.parse(localStorage['students_data']);
    } else {
      this.studentsService.getAllStudents().subscribe({
        next: (students) => {
          this.students = students;
          localStorage.setItem('students_data', JSON.stringify(this.students));
        },
        error: (response) => {
          console.log('Error while trying to get student data from server!');
          console.log(response);
        },
      });
    }
  }
}
