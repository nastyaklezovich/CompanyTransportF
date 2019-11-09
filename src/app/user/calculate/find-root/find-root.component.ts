import { Component, OnInit } from '@angular/core';
import Map from '../../../Map';
import {MapService} from '../../../map.service'

@Component({
  selector: 'app-find-root',
  templateUrl: './find-root.component.html',
  styleUrls: ['./find-root.component.css']
})
export class FindRootComponent implements OnInit {

  map: Map[];
  isOk: boolean;
  error:any;
  condition: boolean;

  constructor(private ms: MapService) { }

  ngOnInit() {
    this.ms.getMaps().subscribe((data: Map[]) => {
      console.log(data);
      this.map = data;
      this.condition=true;
    },
    error => {if(error.status === 204){this.condition=false}; this.error = error.message; console.log(error);}
    );
    this.isOk = false;
    console.log(this.isOk);
  }
 
  acceptMap(id) {
    this.ms.acceptMap(id).subscribe(res => {
      this.isOk=true;
      console.log(id);
      console.log('accept');},
      err=>{
        this.isOk=false;
      })
  }


}
