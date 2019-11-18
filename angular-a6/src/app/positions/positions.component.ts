import { Component, OnInit } from '@angular/core';
import { PositionService } from '../data/position.service';
import { Position } from '../data/position';
import { Router } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions: Position[];
  getPositionsSub: any;
  loadingError: boolean = false;

  constructor(private posService: PositionService, private router: Router) { }

  ngOnInit() {

    this.getPositionsSub = this.posService.getPositions().subscribe((positions: Position[]) => { 
      this.positions = positions;
      // this.getPositionsSub = this.posService;
    }, (error) => {
        this.loadingError = true;
      });
    

  }

  ngOnDestroy() {

    if (this.getPositionsSub != undefined) {
      this.getPositionsSub.unsubscribe(); 
    }

  }

  routePosition(id: string) {
    //console.log(id)
    this.router.navigate([`/position`, id]);      
  }

}
