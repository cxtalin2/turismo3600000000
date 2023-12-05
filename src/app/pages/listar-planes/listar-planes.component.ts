import { Component } from '@angular/core';
import { Plan } from 'src/app/interfaces/planes';
import { PlanesService } from 'src/app/service/planes.service';

@Component({
  selector: 'app-listar-planes',
  templateUrl: './listar-planes.component.html',
  styleUrls: ['./listar-planes.component.css']
})
export class ListarPlanesComponent {
  planes!: Plan[]
  constructor( private planesService: PlanesService ) {}
  ngOnInit() {
    this.planesService.obtenerPlanes().subscribe(( data ) => { 
      console.log(data);
      this.planes = data.data;
    })
  }
}
