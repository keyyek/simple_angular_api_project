import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseApiUrl + '/students-list');
  }

  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(this.baseApiUrl + '/edit/' + id)
  }

  

  // getAllStudents2(){
  //    return this.http.get(this.baseApiUrl + '/students-list')
  //     // this.http.get('http://localhost:3001/students-list')
  // }
}
