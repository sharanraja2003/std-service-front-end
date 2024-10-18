import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API = "http://localhost:8080/api/students";

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get(this.API);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`);
  }

  createStudent(studentData: any): Observable<any> {
    return this.http.post(this.API, studentData);
  }

  updateStudent(id: number, studentData: any): Observable<any> {
    return this.http.put(`${this.API}/${id}`, studentData);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }

  getStudentByRollNumber(rollNumber: string): Observable<any> {
    return this.http.get(`${this.API}/roll/${rollNumber}`);
  }

  getStudentsByDepartment(department: string): Observable<any> {
    return this.http.get(`${this.API}/department/${department}`);
  }

  getStudentsBySemester(semester: number): Observable<any> {
    return this.http.get(`${this.API}/semester/${semester}`);
  }

  getStudentsByDepartmentAndSemester(department: string, semester: number): Observable<any> {
    return this.http.get(`${this.API}/department/${department}/semester/${semester}`);
  }
}
