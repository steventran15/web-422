import { Component, OnInit } from '@angular/core';
import { PositionService } from '../data/position.service';
import { Position } from '../data/position';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions: Position[];
  getPositionsSub: any;
  loadingError: boolean = false;

  constructor(private posService: PositionService) { }

  ngOnInit() {

    this.posService.getPositions().subscribe((positions: Position[]) => { 
      this.positions = positions;
      this.getPositionsSub = this.posService;}, (error) => {
        this.loadingError = true;
      });
    

  }

  ngOnDestroy() {

    if (this.getPositionsSub != undefined) {
      this.getPositionsSub.getPositions.unsubscribe(); 
    }

  }

}
