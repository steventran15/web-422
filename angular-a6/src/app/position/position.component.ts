import { Component, OnInit } from '@angular/core';
import { Position } from '../data/position';
import { PositionService } from '../data/position.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  paramSubscription: any;
  positionSubscription: any;
  savePositionSubscription: any;
  position: Position;
  successMessage: boolean = false;
  failMessage: boolean = false; 


  constructor(private posService: PositionService, private route: ActivatedRoute) { }

  ngOnInit() {

    let posid: string;  
    
    this.paramSubscription = this.route.params.subscribe(params => {
      posid = params['id'];
      // + converts the string to an int/number. 
    });
    
    this.positionSubscription = this.posService.getPosition(posid).subscribe(
      (pos: Position[]) => { this.position = pos[0]; }   
    );    

  }


  onSubmit() {

    this.savePositionSubscription = this.posService.savePosition(this.position).subscribe(
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

    if (this.positionSubscription != undefined) {
      this.positionSubscription.unsubscribe();  
    }

    if (this.savePositionSubscription != undefined) { 
      this.savePositionSubscription.unsubscribe();  
    }

  } 
 
}
