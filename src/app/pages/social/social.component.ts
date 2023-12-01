import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/interfaces/planes';
import { PlanesService } from 'src/app/service/planes.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  planes!: Plan[];

  constructor(private planesService: PlanesService, private router: Router) {}

  ngOnInit() {
    this.planesService.obtenerPlanes().subscribe((data) => {
      console.log(data);
      this.planes = data.data;
    });
  }

  update(id: string) {
    this.router.navigateByUrl(`/pages/update/${id}`);
  }

  irAlDetalleDelPlan(plan: Plan) {
    this.router.navigateByUrl(`/plan/${plan._id}`);
  }
}
