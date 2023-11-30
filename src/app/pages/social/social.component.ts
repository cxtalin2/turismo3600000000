import { Component } from '@angular/core';
import { Planes } from 'src/app/interfaces/planes';
import { PlanesService } from 'src/app/service/planes.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent { 
  planes!: Planes[];
  constructor( private planesService: PlanesService) {}
  ngOnInit() {
    this.planesService.obtenerPlanes().subscribe(( data ) => {
      console.log( data );
      this.planes = data.data
      
    })
  }
}
