import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Point from '../../Point';
import {CalculateService} from '../../calculate.service';
import {PointService} from '../../point.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  points: Point[];

  calculateForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private cs: CalculateService, private ps: PointService) {
    this.createForm();
  }

  createForm() {
    this.calculateForm = this.fb.group({
      start_point: ['', Validators.required],
      end_point:['', Validators.required],
      weight_product: ['', Validators.required],
      volume_product: ['', Validators.required],
      type_product: ['', Validators.required],
    })
  }

  find_route(start_point, end_point, weight_product, volume_product, type_product){
    this.cs.find_route(start_point, end_point, weight_product, volume_product, type_product);
    this.router.navigate(['/user/calculate/findroot']);
    //window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    this.ps.get_point_name().subscribe((data: Point[]) => {
      console.log(data);
      this.points = data;
    });

  }

}
