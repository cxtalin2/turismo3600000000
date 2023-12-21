import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/interfaces/planes';
import { PlanesService } from 'src/app/service/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent {
  planes!: Plan[]
  currentPage: number = 1;
  constructor( private planesService: PlanesService, private router: Router ) {}
  ngOnInit() {
    this.cargarDatos()
  }
  cargarDatos() {
    this.planesService.obtenerPlanesPaginados( this.currentPage ).subscribe(( data ) => { 
    console.log(data);
    this.planes = data.data;
  })}
  nextPage(): void {
    this.currentPage++;
    this.cargarDatos();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.cargarDatos();
    }
  }

  viewDetails(articleId: string): void {
    this.router.navigate(['article', articleId]);
  }
  irAlDetalleDelPlan(plan: Plan) {
    this.router.navigateByUrl(`/plan/${plan._id}`);
  }
}
