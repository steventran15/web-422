import { Component, OnInit } from '@angular/core';
import { EmployeeRaw } from '../data/employeeRaw';
import { EmployeeService } from '../data/employee.service';
import { PositionService } from '../data/position.service'; 
import { ActivatedRoute } from '@angular/router';
import { Position } from '../data/position';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  paramSubscription: any;
  employeeSubscription: any;
  getPositionsSubscription: any;
  saveEmployeeSubscription: any;
  employee: EmployeeRaw;
  positions: Position[];
  successMessage: boolean = false;
  failMessage: boolean = false;


  constructor(private empService: EmployeeService, private posService: PositionService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    let id = 0;

    this.paramSubscription = this.route.params.subscribe(params => {
      id = +params['id'];
    }); 

    this.employeeSubscription = this.empService.getEmployee(id).subscribe(
      (singleEmployee: EmployeeRaw[]) => {  this.employee = singleEmployee[0]; }  
    );
    
    this.getPositionsSubscription = this.posService.getPosition(id).subscribe(
      (pos: Position[]) => { this.positions = pos; }    
    );
  }

  onSubmit() {

    this.saveEmployeeSubscription = this.empService.saveEmployee(this.employee).subscribe(
      (data: any) => { 
        
        this.successMessage = true;
        setTimeout(() => { this.successMessage = false; }, 2500);

      }, (error) => {
        this.failMessage = true;
        setTimeout(() => { this.failMessage = false; }, 2500);
      }
    );


  }

  ngOnDestroy() {

  }
  

}

