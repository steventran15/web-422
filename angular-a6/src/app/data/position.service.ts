import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Position } from './position';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})

};

@Injectable({
  providedIn: 'root'
})

export class PositionService {

  getUrl: string = "https://weba1.herokuapp.com"; 

  constructor(private hc: HttpClient) { }

  getPositions(): Observable<Position[]> {

    return this.hc.get<Position[]>(`${this.getUrl}/positions`); 
  

  }

  savePosition(position: Position): Observable<any> {

    return this.hc.put<any>(`${this.getUrl}/position/${position._id}`, position, httpOptions);
    
  }


  getPosition(id): Observable<Position[]> {

    return this.hc.get<Position[]>(`${this.getUrl}/position/${id}`);

  }

}

 