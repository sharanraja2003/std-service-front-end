import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'student-module';
  studentDetails: any[] = [];
  departments: string[] = ['CSE', 'ECE', 'ME', 'CE', 'EE'];
  semesters: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudentDetails();
  }

  register(registerForm: NgForm) {
    this.studentService.createStudent(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getStudentDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getStudentDetails() {
    this.studentService.getStudents().subscribe(
      (resp: any[]) => {
        console.log(resp);
        this.studentDetails = resp;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  deleteStudent(student: any) {
    this.studentService.deleteStudent(student.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  studentToUpdate = {
    id: null as any,
    name: "",
    rollNumber: "",
    department: "",
    semester: null as any
  };

  edit(student: any) {
    this.studentToUpdate = { ...student };
  }

  updateStudent() {
    this.studentService.updateStudent(this.studentToUpdate.id, this.studentToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
