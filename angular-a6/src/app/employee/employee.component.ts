import { Component, OnInit } from '@angular/core';
import { EmployeeRaw } from '../data/employeeRaw';
import { EmployeeService } from '../data/employee.service';
import { PositionService } from '../data/position.service'; 
import { ActivatedRoute } from '@angular/router';
import { Position } from '../data/position';
import { NgForm } from '@angular/forms';

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
  
  employee: EmployeeRaw = new EmployeeRaw();   
  positions: Position[];
  successMessage: boolean = false;
  failMessage: boolean = false;


  constructor(private empService: EmployeeService, private posService: PositionService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    let id: string;
    //let posID: string;


    this.paramSubscription = this.route.params.subscribe(params => {
      id = params['id'];  
      // a string of the id is extracted from the params and stored into id variable. /:id -> id 
    }); 


    this.employeeSubscription = this.empService.getEmployee(id).subscribe(
      (singleEmployee: EmployeeRaw[]) => {      
        
        this.employee = singleEmployee[0];   
        //posID = this.employee.Position;                     
      }  
      
      
    );
    
    // cannot pass in this.employee.Position string id | Position property is undefined   
    // this.getPositionsSubscription = this.posService.getPosition(this.employee.Position).subscribe( 
    //   (pos: Position[]) => {  

    //     this.positions = pos;    
    //   }     
    // );


    this.getPositionsSubscription = this.posService.getPositions().subscribe(
      (pos: Position[]) => {
        this.positions = pos;
      }

    );

  }
 
  onSubmit(f: NgForm): void {

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

