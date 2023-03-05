import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    StudentsListComponent,
    AddStudentComponent,
    EditStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
