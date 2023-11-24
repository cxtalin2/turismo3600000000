import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  message!: String;
  classMessage!: String;

  // Paso 2 (Reactive Forms): Define estructura
  registerForm: FormGroup = this.formBuilder.group({
    name: [ 
      '',   // Valor por defecto del campo
      [
        Validators.required,
        Validators.minLength( 3 ),
      ]    // Validaciones del campo
    ],
    username: [ 
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: [ 
      '',
      [ 
        Validators.required,
        Validators.minLength( 6 ),
        Validators.maxLength( 12 )
      ]
    ]
  });

  // Paso 1 (Reactive Forms): Inyeccion de dependencias
  constructor( 
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  // Paso 4 (Reactive Forms): Obtener datos del formulario
  onSubmit() {
    console.log( this.registerForm.value );   // { name: 'dasdasda', username: 'gc@test.com', password: '123456'}

    // Invocar el Servicio
    this.authService.register( this.registerForm.value ).subscribe( data => {
      console.log( '>>>', data );


      // Valida si la peticion fue exitosa y despliega 
      if( data.ok )
        this.classMessage = 'message success';
      else
        this.classMessage = 'message error'

      // Oculta mensaje del formulario
      setTimeout( () => {
        this.classMessage = '';
        this.message = '';
      }, 2000 );

      // Asigna el mensaje
      this.message = data.msg!;
    });

    this.registerForm.reset();
  }
}
