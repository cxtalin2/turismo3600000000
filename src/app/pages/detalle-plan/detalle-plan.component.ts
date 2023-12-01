import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { Plan } from 'src/app/interfaces/planes';
import { PlanesService } from 'src/app/service/planes.service';

@Component({
  selector: 'app-detalle-plan',
  templateUrl: './detalle-plan.component.html',
  styleUrls: ['./detalle-plan.component.css']
})
export class DetallePlanComponent {
  plan!: Plan
  constructor(private activatedRoute: ActivatedRoute, private planesService: PlanesService) {}

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
        this.planesService.getPlanById(id).subscribe(( data ) => {
          console.log( data );
          this.plan = data
        })
      });
  }
}
