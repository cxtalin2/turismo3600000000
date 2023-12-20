import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanesService } from 'src/app/service/planes.service';

@Component({
  selector: 'app-agregar-planes',
  templateUrl: './agregar-planes.component.html',
  styleUrls: ['./agregar-planes.component.css']
})
export class AgregarPlanesComponent {
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
    urlImage: [''],
    highlight: [ false ]
  })

  constructor( private fb: FormBuilder, private planesService: PlanesService, private router: Router) {}

  agregarPlanes() {
    console.log( this.planesForm.value );
    this.planesService.crearPlan( this.planesForm.value ).subscribe(( data ) => {
      console.log( data );
      this.planesForm.reset()
      this.router.navigateByUrl('/listar-planes')
    })
  }
}
// name: 
// description: 
// location: 
// price:
// type: 
// category: 
// urlImage: 