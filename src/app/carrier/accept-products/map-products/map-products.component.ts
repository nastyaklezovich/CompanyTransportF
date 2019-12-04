import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { MapService } from 'src/app/map.service';
import Map from '../../../Map'

@Component({
  selector: 'app-map-products',
  templateUrl: './map-products.component.html',
  styleUrls: ['./map-products.component.css']
})
export class MapProductsComponent implements OnInit {

  product: {} = {};
  res: any = [];
  map: {} = {};
  data: {} = {};
  opt: any = [];
  opt_product: {} = {};
  isOptimal: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router, private ps: ProductService, private ms: MapService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.get_products(params['id']).subscribe(res => {
        console.log(res);
        this.product = { ...res };
        this.res = res;
      });
    });
    this.route.params.subscribe(params => {
      this.ms.get_map(params['id']).subscribe(data => {
        console.log(data);
        this.map = { ...data };
        this.data = data;
      });
    });
  }

  calculate() {
    this.route.params.subscribe(params => {
      this.ps.get_optimal_product(params['id']).subscribe(opt => {
        console.log(params['id']);
        console.log(opt);
        this.opt_product = { ...opt };
        this.opt = opt;
        this.isOptimal = true;
      });
    });
  }

  save_optimal_product() {
    this.route.params.subscribe(params => {
      this.ps.save_optimal_product(params['id']);
    });
  }

}
