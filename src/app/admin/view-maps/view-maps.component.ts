import { Component, OnInit } from '@angular/core';
import Map from '../../Map';
import {MapService} from '../../map.service'


@Component({
  selector: 'app-view-maps',
  templateUrl: './view-maps.component.html',
  styleUrls: ['./view-maps.component.css']
})
export class ViewMapsComponent implements OnInit {

  maps: Map[];

  constructor(private ms: MapService) { }

  ngOnInit() {
    this.ms.get_maps().subscribe((data: Map[])=>{
      console.log(data);
      this.maps=data;
    });
  }

}
