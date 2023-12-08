import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  BASE_URL: string = environment.baseUrl

  token: string
  headers: HttpHeaders

  constructor( private http:HttpClient ) {
    const token = localStorage.getItem('token')
    this.token = token ? token : '' ; 
    this.headers = new HttpHeaders().set('X-Token', this.token)
  }

  crearReserva( nuevaReserva: any ) {
    return this.http.post(this.BASE_URL+'/reservas', nuevaReserva, { headers: this.headers })
  }
}
