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
  constructor( private planesService: PlanesService, private router: Router ) {}
  ngOnInit() {
    this.cargarDatos()
  }
  cargarDatos() {
    this.planesService.obtenerPlanes().subscribe(( data ) => { 
    console.log(data);
    this.planes = data.data;
  })}
  eliminar(id: string) {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
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
