import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  getUrl: string = "https://weba1.herokuapp.com";

  constructor(private hc: HttpClient) { }

  getEmployees(): Observable<Employee[]> {

    return this.hc.get<Employee[]>(`${this.getUrl}/employees`);
  }
}


