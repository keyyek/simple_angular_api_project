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
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];

  students: Student[] = [];
  // students:any;
  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    // this.students = this.studentsService.getAllStudents2()
    // console.log(this.students);
    this.postList()
  }

  postList():void{

    this.studentsService.getAllStudents().subscribe({
      next: (students) => {
        this.students = students;
        console.log('11111111111111111111111');
        console.log(this.students);
        this.students = students;
      },
      error: (response) => {
        console.log('222222222222222222222');

        console.log(response);
      },
    });
  }
  onTableDataChange(event: any) {
    console.log("33");
    
    this.page = event;
    this.postList()
  }

  // onTableSizeChange(event: any) {
  //   console.log("44");
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.postList()
  // }
}
