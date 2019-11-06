import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private hc: HttpClient) { }

  getEmployees(): Observable<Employee[]> {

    return this.hc.get<Employee[]>("https://weba1.herokuapp.com/employees");
  }
}


