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
  res: {} = {};
  map: {} = {};
  data: {} ={};

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


}
