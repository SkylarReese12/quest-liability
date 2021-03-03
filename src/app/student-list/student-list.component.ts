import { StudentsService } from './../services/students.service';
import { Student } from './../models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students: Student[] = [];
  constructor(
    private studentsService: StudentsService
  ) { }

  async ngOnInit() {
    this.students = await this.studentsService.getAllStudents();
  }

}
