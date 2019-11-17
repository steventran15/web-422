import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { EmployeeRaw } from './employeeRaw';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
};

@Injectable({
  providedIn: 'root'
})



export class EmployeeService {

  getUrl: string = "https://weba1.herokuapp.com";

  constructor(private hc: HttpClient) { }  

  getEmployees(): Observable<Employee[]> {

    return this.hc.get<Employee[]>(`${this.getUrl}/employees`);
  }


  saveEmployee(employee: EmployeeRaw): Observable<any> {

    return this.hc.put<any>(`${this.getUrl}/employee/${employee._id}`, employee, httpOptions);    
  }
 


  getEmployee(id): Observable<EmployeeRaw[]> {

    return this.hc.get<EmployeeRaw[]>(`${this.getUrl}/employee-raw/${id}`);  
  }
 

}



