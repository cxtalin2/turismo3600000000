import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Plan } from 'src/app/interfaces/planes';
import { PlanesService } from 'src/app/service/planes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-plan',
  templateUrl: './actualizar-plan.component.html',
  styleUrls: ['./actualizar-plan.component.css']
})
export class ActualizarPlanComponent {
  categories = [{ 
    name: "Voluntariado", value: "voluntariado"
  }, { 
    name: "Local", value: "local"
  }]

  planesForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
    location: ['Bogotá'],
    price: ['', [Validators.required]],
    category: [''],
    urlImage: ['']
  })
  plan!: Plan
  planId!: string
  constructor( private fb: FormBuilder, private planesService: PlanesService, private router: Router, private activatedRoute: ActivatedRoute) {}
  

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        tap(response => {
          console.log(response);
        }),
        map(response => response['id'])
      )
      .subscribe(id => {
        console.log(id); 
        this.planId = id
        this.planesService.getPlanById(id).subscribe(( data ) => {
          console.log( data );
          this.plan = data

          const {name, description, location, price, category, urlImage} = data

        this.planesForm.setValue({
          name,
          description,
          location,
          price,
          category,
          urlImage
        })
        })
      });
  }

  actualizarPlanes() {
    console.log( this.planesForm.value );

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, updated it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Updated!",
          text: "Your file has been updated.",
          icon: "success"
        });
        this.planesService.actualizarPlan( this.planId, this.planesForm.value ).subscribe(( data ) => {
          console.log( data );
          this.planesForm.reset()
          this.router.navigateByUrl('/listar-planes')
        })
      }
    });

    
  }
}
