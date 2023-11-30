import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePlanes } from '../interfaces/response-planes';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor( private http:HttpClient ) {}
  obtenerPlanes() {
    return this.http.get<ResponsePlanes>( 'http://localhost:4000/api/planes' )
  }
}
