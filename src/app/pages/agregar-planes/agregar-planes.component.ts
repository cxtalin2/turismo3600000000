import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    name: [''],
    description: [''],
    location: ['Bogota'],
    price: [''],
    category: [''],
    urlImage: ['']
  })

  constructor( private fb: FormBuilder ) {}

  agregarPlanes() {
    console.log( this.planesForm.value );
    
  }
}
// name: 
// description: 
// location: 
// price:
// type: 
// category: 
// urlImage: 