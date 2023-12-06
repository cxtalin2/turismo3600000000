import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SocialComponent } from './pages/social/social.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AgregarPlanesComponent } from './pages/agregar-planes/agregar-planes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './pages/booking/booking.component';
import { DetallePlanComponent } from './pages/detalle-plan/detalle-plan.component';
import { ListarPlanesComponent } from './pages/listar-planes/listar-planes.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { ActualizarPlanComponent } from './pages/actualizar-plan/actualizar-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetallePlanComponent,
    SocialComponent,
    LoginComponent,
    RegisterComponent,
    AgregarPlanesComponent,
    BookingComponent,
    DetallePlanComponent,
    ListarPlanesComponent,
    HeaderAdminComponent,
    ActualizarPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
