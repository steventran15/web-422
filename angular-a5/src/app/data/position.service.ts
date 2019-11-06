import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Position } from './position';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PositionService {

  constructor(private hc: HttpClient) { }

  getPositions(): Observable<Position[]> {

    return this.hc.get<Position[]>("https://weba1.herokuapp.com/positions");


  }

}
