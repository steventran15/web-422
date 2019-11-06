import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../data/employee.service';
import { Employee } from '../data/employee';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  employees: Employee[];
  getEmployeesSub: any;
  loadingError: boolean = false;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {

    console.log("this component is made");

    this.empService.getEmployees().subscribe((employees: Employee[]) => { 
      this.employees = employees;
      this.getEmployeesSub = this.empService;}, (error) => {
        this.loadingError = true;
      });



    //this.employees = this.empService.getEmployees(); 
  }

  ngOnDestroy() {
    
    if (this.getEmployeesSub != undefined) {
      this.getEmployeesSub.getEmployees.unsubscribe();  
    }
  

  }

}
