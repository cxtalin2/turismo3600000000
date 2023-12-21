import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Plan } from 'src/app/interfaces/planes';
import { PlanesService } from 'src/app/service/planes.service';
import { ReservasService } from 'src/app/service/reservas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-plan',
  templateUrl: './detalle-plan.component.html',
  styleUrls: ['./detalle-plan.component.css']
})
export class DetallePlanComponent {
  planActual!: any;
  descuento:number = 0.1
  cantidadPersonas:number = 0;
  total = 0;
  previousPlan: any;
  nextPlan: any;


  planes!: any;
  currentPage: number = 1
  reservasForm: FormGroup = this.fb.group({
    name: ['', []],
    email: [''],
    plan: [''],
    date: [''],
    quantity: [''],
    notes: [''],
    total: [ 0 ]
  })

  constructor(
    private planesService: PlanesService,
    private router: Router,
    private fb: FormBuilder,
    private reservasService: ReservasService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log( 'DetallePlanComponent' );
  }


  // ngOnInit() {
  //   this.activatedRoute.params
  //     .pipe(
  //       tap(response => {
  //         console.log(response);
  //       }),
  //       map(response => response['id'])
  //     )
  //     .subscribe(id => {
  //       console.log(id);
  //       this.planesService.getPlanById(id).subscribe(( data ) => {
  //         console.log( data );
  //         this.plan = data
  //       })
  //     });
  // }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      const planId = params[ 'id' ];
      console.log( planId );

      this.loadArticle(planId);
    });

    this.planesService.obtenerPlanes().subscribe( planes => {
      console.log(planes);

      this.planes = planes.data;
    })
  }

  // .subscribe(
  //   (data) => {
  //     console.log( data );
  //     this.plan = data.plan;
  //     this.previousPlan = data.previousPlan;
  //     this.nextPlan = data.nextPlan;
  //   }
  // );

  loadArticle( id: string ): void {
    this.planesService.getPlanById(id).subscribe(( data ) => {
      console.log( data );
      this.planActual = data;
    })
  }

  logRouterLink(route: string): void {
    console.log('Ruta del enlace:', route);
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
  calculaTotal() {
    this.total = this.reservasForm.get("quantity")?.value * this.planActual?.price!;
    this.reservasForm.setValue({
      name: this.reservasForm.get("name")?.value,
      email: this.reservasForm.get("email")?.value,
      plan: this.reservasForm.get("plan")?.value,
      date: this.reservasForm.get("date")?.value,
      quantity: this.reservasForm.get("quantity")?.value,
      notes: this.reservasForm.get("notes")?.value,
      total: this.total
    })
  }
}
