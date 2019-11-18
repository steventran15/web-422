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
    
    let id: string;
    let posID: string;

    this.paramSubscription = this.route.params.subscribe(params => {
      id = params['id'];  
    }); 

    this.employeeSubscription = this.empService.getEmployee(id).subscribe(
      (singleEmployee: EmployeeRaw[]) => {  this.employee = singleEmployee[0]; 
        posID = this.employee.Position;
        console.log(posID);   
        //console.log(this.employee._id)
      }  
      
      
    );
    
    this.getPositionsSubscription = this.posService.getPosition(posID).subscribe(
      (pos: Position[]) => { this.positions = pos;  
      
      //console.log(this.positions);
      
      }     
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

    if (this.paramSubscription != undefined) {
      this.paramSubscription.unsubscribe();  
    }

    if (this.employeeSubscription != undefined) {
      this.employeeSubscription.unsubscribe();  
    }

    if (this.getPositionsSubscription != undefined) {
      this.getPositionsSubscription.unsubscribe();  
    }

    if (this.saveEmployeeSubscription != undefined) {
      this.saveEmployeeSubscription.unsubscribe();  
    }
   
  }
  

}

