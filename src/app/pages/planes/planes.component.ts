import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/interfaces/planes';
import { PlanesService } from 'src/app/service/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent {
  planes!: Plan[]
  constructor( private planesService: PlanesService, private router: Router ) {}
  ngOnInit() {
    this.cargarDatos()
  }
  cargarDatos() {
    this.planesService.obtenerPlanes().subscribe(( data ) => { 
    console.log(data);
    this.planes = data.data;
  })}
}
