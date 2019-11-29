import { Component, OnInit, TemplateRef } from '@angular/core';
import { MapService } from '../../map.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import Map from '../../Map'
import Product from '../../Product'
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-accept-products',
  templateUrl: './accept-products.component.html',
  styleUrls: ['./accept-products.component.css']
})
export class AcceptProductsComponent implements OnInit {

  maps: Map[];

  map: {} ={};

  product: {} ={};

  modalRef: BsModalRef;

  res: {} = {};

  data: {} = {};

  constructor(private ms: MapService, private modalService: BsModalService, private router: Router, private ps: ProductService) { }

  ngOnInit() {
    this.ms.get_maps().subscribe((data: Map[]) => {
      console.log(data);
      this.maps = data;
    })
  }

  open_window(id){
    this.router.navigate(['carrier/acceptproducts/mapproducts', id])
  }
  // openModal(template: TemplateRef<any>, id) {
  //   this.modalRef = this.modalService.show(template);
  //   console.log(id);
  //   this.ps.get_products(id).subscribe(((res: Product[]) => {
  //     this.product = { ...res };
  //     this.res = res;
  //     console.log(res)
  //   }));
  //   this.ms.get_map(id).subscribe((data: Map[])=>{
  //     this.map = {...data};
  //     this.data = data;
  //     console.log(data);
  //   })
  // }

}
