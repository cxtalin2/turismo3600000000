import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Plan } from 'src/app/interfaces/planes';
import { PlanesService } from 'src/app/service/planes.service';
import { ReservasService } from 'src/app/service/reservas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent {
  @Input() plan:Plan | undefined;
  descuento:number = 0.1
  cantidadPersonas:number = 0;
  total = 0;
  

  planes!: Plan[];

  reservasForm: FormGroup = this.fb.group({
    name: ['', []],
    email: [''],
    plan: [''],
    date: [''], 
    quantity: [''],
    notes: ['']
  })

  constructor(private planesService: PlanesService, private router: Router, private fb: FormBuilder, private reservasService: ReservasService) {}

  ngOnInit() {
    this.planesService.obtenerPlanes().subscribe((data) => {
      console.log(data);
      this.planes = data.data;
    });
  }

  update(id: string) {
    this.router.navigateByUrl(`/pages/update/${id}`);
  }

  irAlDetalleDelPlan(plan: Plan) {
    this.router.navigateByUrl(`/plan/${plan._id}`);
  }

  onSubmit() {
    console.log(this.reservasForm.value);
    this.reservasService.crearReserva(this.reservasForm.value).subscribe((data) => {
      console.log(data);
      this.reservasForm.reset()
    })
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Tu reserva ha sido registrada!",
      showConfirmButton: false,
      timer: 1500
    });
  }


}
