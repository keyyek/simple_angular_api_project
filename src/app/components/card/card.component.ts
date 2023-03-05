import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() student_data: Student | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
