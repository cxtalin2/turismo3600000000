import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePlanes } from '../interfaces/response-planes';
import { map, tap } from 'rxjs';
import { ResponsePlan } from '../interfaces/response-plan';
import { Plan } from '../interfaces/planes';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
  BASE_URL: string = environment.baseUrl

  token: string
  headers: HttpHeaders

  constructor( private http:HttpClient ) {
    const token = localStorage.getItem('token')
    this.token = token ? token : '' ; 
    this.headers = new HttpHeaders().set('X-Token', this.token)
  }
  obtenerPlanes() {
    return this.http.get<ResponsePlanes>( this.BASE_URL+'/planes' )
  }

  getPlanById( id: string ) {

    return this.http.get<ResponsePlan>( `${this.BASE_URL}/planes/${ id }`)
      .pipe(
        tap( data => {
          console.log( data );

          return data;
        }),
        map( plan => plan.data )
      );
  }

  crearPlan( nuevoPlan: Plan ) {
    return this.http.post(this.BASE_URL+'/planes', nuevoPlan, { headers: this.headers })
  }
}
