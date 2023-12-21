import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/interfaces/planes';
import { PlanesService } from 'src/app/service/planes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-planes',
  templateUrl: './listar-planes.component.html',
  styleUrls: ['./listar-planes.component.css']
})
export class ListarPlanesComponent {
  planes!: Plan[]
  currentPage: number = 1
  constructor( private planesService: PlanesService, private router: Router ) {}
  ngOnInit() {
    this.cargarDatos()
  }
  cargarDatos() {
    this.planesService.obtenerPlanesPaginados( this.currentPage ).subscribe(( data ) => { 
    console.log(data);
    this.planes = data.data;
  })}
  eliminar(id: string) {

    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, estoy seguro!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        Swal.fire({
          title: "¡Eliminado!",
          text: "El plan ha sido eliminado.",
          icon: "success"
        });
        this.planesService.eliminarPlan(id).subscribe((data) => {
          console.log(data);
          this.cargarDatos()      
        })
      }
    });
   
  }
  editar(id: string) {
    this.router.navigate(["actualizar-plan", id])
  }
}
