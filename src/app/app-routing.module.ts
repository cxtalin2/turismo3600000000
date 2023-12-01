import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SocialComponent } from './pages/social/social.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AgregarPlanesComponent } from './pages/agregar-planes/agregar-planes.component';
import { DetallePlanComponent } from './pages/detalle-plan/detalle-plan.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'social', component: SocialComponent},
  { path: 'plan/:id', component: DetallePlanComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'agregar', component: AgregarPlanesComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
