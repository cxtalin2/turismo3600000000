import { Component } from '@angular/core';
import { Reservas } from 'src/app/interfaces/reservas';
import { ReservasService } from 'src/app/service/reservas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.css']
})
export class ListarReservasComponent {
  reservas!: Reservas[]

  constructor(private reservasService: ReservasService) {}
  ngOnInit() {
    this.cargarReservas();
  }
  cargarReservas() {
    
    this.reservasService.obtenerReserva().subscribe(( data ) => {
      console.log(data);
      this.reservas = data.data
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
          text: "La reserva ha sido eliminada.",
          icon: "success"
        });
        this.reservasService.eliminarReserva(id).subscribe((data) => {
          console.log(data);
          this.cargarReservas()      
        })
      }
    });
   
  }
}
