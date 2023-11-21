import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SocialComponent } from './pages/social/social.component';
import { SostenibleComponent } from './pages/sostenible/sostenible.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'social', component: SocialComponent},
  { path: 'sostenible', component: SostenibleComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
