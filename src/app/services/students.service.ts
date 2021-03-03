import { Student } from './../models/student';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private apiBaseUrl: string = 'https://localhost:5001';

  constructor(private http: HttpClient) 
  {
     
  }

  public getAllStudents(): Promise<Student[]> {
    let url = `${this.apiBaseUrl}/students`;
    let response = this.http.get<Student[]>(url, this.httpOptions).toPromise();
    return response;
  }

}
