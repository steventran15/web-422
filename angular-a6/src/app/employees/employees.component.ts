import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../data/employee.service';
import { Employee } from '../data/employee';
//import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  employees: Employee[]; 
  getEmployeesSub: any;
  loadingError: boolean = false;
  filteredEmployees: Employee[];
  
  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit() {

    //console.log("this component is made");

    this.getEmployeesSub = this.empService.getEmployees().subscribe((employees: Employee[]) => { 
      this.employees = employees;
      this.filteredEmployees = employees;
      // this.getEmployeesSub = this.empService;
    }, (error) => {
        this.loadingError = true;
      });



    //this.employees = this.empService.getEmployees(); 
  }


  onEmployeeSearchKeyUP(event: any) {
    
    let substring: string = event.target.value.toLowerCase();

    this.filteredEmployees = this.employees.filter((emp) => 

    ((emp.FirstName.toLowerCase().indexOf(substring) != -1) || 
    
    (emp.LastName.toLowerCase().indexOf(substring) != -1) ||
    
    (emp.Position.PositionName.toLowerCase().indexOf(substring) != -1))
    
    );

     
    // if user puts blank entry for the search, 
    // it will return back to SHOWING all employees.   

    let blank: string;
    blank = event.target.value;

    if (blank.trim() == "") {
      this.filteredEmployees = this.employees;
    } 

  }


  ngOnDestroy() {
    
    if (this.getEmployeesSub != undefined) {
      this.getEmployeesSub.unsubscribe();  
    }
  

  }

  routeEmployee(id: string) {
    //console.log(id)
    this.router.navigate([`/employee`, id]);   
  }

}
   