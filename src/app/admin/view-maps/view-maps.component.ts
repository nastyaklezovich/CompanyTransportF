import { Component, OnInit, TemplateRef } from '@angular/core';
import Map from '../../Map';
import { MapService } from '../../map.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-view-maps',
  templateUrl: './view-maps.component.html',
  styleUrls: ['./view-maps.component.css']
})
export class ViewMapsComponent implements OnInit {

  maps: Map[];

  res: {} = {};
  map: {} = {};
  mas: [] =[];

  modalRef: BsModalRef;

  constructor(private ms: MapService, private modalService: BsModalService, private router: Router) { }

  ngOnInit() {
    this.ms.get_maps().subscribe((data: Map[]) => {
      console.log(data);
      this.maps = data;
    });
  }

  openModal(template: TemplateRef<any>, id) {
    this.modalRef = this.modalService.show(template);
    console.log(id);
    this.ms.get_map(id).subscribe(((res: Map[]) => {
      this.map = { ...res };
      this.res = res;

    }));
  }

}
