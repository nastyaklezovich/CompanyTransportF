import { Component, OnInit } from '@angular/core';
import { PointService } from 'src/app/point.service';
import Point from '../../Point'

@Component({
  selector: 'app-view-point',
  templateUrl: './view-point.component.html',
  styleUrls: ['./view-point.component.css']
})
export class ViewPointComponent implements OnInit {

  points: Point[];

  constructor(private ps: PointService) { }

  ngOnInit() {
    this.ps.get_point_name().subscribe((data: Point[]) => {
      console.log(data);
      this.points = data;      
    })
  }

}
