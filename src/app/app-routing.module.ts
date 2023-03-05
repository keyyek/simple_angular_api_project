import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [
  
  {
    path: '',
    component: StudentsListComponent

  },
  {
    path: 'students',
    component: StudentsListComponent

  },
  {
    path: 'students/add',
    component: AddStudentComponent

  },
  {
    path: 'edit/:id',
    component: EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// [routerLink]="['/student','edit',student_data.id]