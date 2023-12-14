import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SocialComponent } from './pages/social/social.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AgregarPlanesComponent } from './pages/agregar-planes/agregar-planes.component';
import { DetallePlanComponent } from './pages/detalle-plan/detalle-plan.component';
import { verifyAuthGuard } from './guards/verify-auth.guard';
import { ListarPlanesComponent } from './pages/listar-planes/listar-planes.component';
import { ActualizarPlanComponent } from './pages/actualizar-plan/actualizar-plan.component';
import { ListarReservasComponent } from './pages/listar-reservas/listar-reservas.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'social', component: SocialComponent},
  { path: 'plan/:id', component: DetallePlanComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { canActivate: [ verifyAuthGuard ], path: 'crear-plan', component: AgregarPlanesComponent},
  { canActivate: [ verifyAuthGuard ], path: 'listar-planes', component: ListarPlanesComponent},
  { canActivate: [ verifyAuthGuard ], path: 'actualizar-plan/:id', component: ActualizarPlanComponent},
  { canActivate: [ verifyAuthGuard ], path: 'listar-reservas', component: ListarReservasComponent },
  { path: 'actividades', component: ActividadesComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
