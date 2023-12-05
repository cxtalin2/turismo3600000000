import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message!: String;
  classMessage!: String;

  loginForm: FormGroup = this.formBuilder.group({
    username: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', [ Validators.required ] ]
  });

  constructor( 
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    console.log( this.loginForm.value );

    this.authService.login( this.loginForm.value ).subscribe( ( data: boolean ) => {
      console.log( data );

      // Valida si no se logra autenticar el usuario 
      if( ! data ) {
        this.classMessage = 'message error';
        this.message = 'Error de autenticacion';
      }

      // Oculta mensaje del formulario
      setTimeout( () => {
        this.classMessage = '';
        this.message = '';
        
      }, 2000 );
      
    });

  }
}
