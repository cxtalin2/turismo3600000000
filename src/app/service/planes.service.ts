import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePlanes } from '../interfaces/response-planes';
import { map, tap } from 'rxjs';
import { ResponsePlan } from '../interfaces/response-plan';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor( private http:HttpClient ) {}
  obtenerPlanes() {
    return this.http.get<ResponsePlanes>( 'http://localhost:4000/api/planes' )
  }

  getPlanById( id: string ) {

    return this.http.get<ResponsePlan>( `http://localhost:4000/api/planes/${ id }`)
      .pipe(
        tap( data => {
          console.log( data );

          return data;
        }),
        map( plan => plan.data )
      );
  }
}
