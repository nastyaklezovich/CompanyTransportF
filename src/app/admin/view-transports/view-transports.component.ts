import { Component, OnInit } from '@angular/core';
import Transport from '../../Transport'
import {TransportService} from '../../transport.service'

@Component({
  selector: 'app-view-transports',
  templateUrl: './view-transports.component.html',
  styleUrls: ['./view-transports.component.css']
})
export class ViewTransportsComponent implements OnInit {

transports: Transport[];

  constructor(private ts: TransportService) { }

  ngOnInit() {
    this.ts.get_transports().subscribe((data: Transport[])=>{
      console.log(data);
      this.transports = data;
    })
  }

  delete_transport(id){
    this.ts.delete_transport(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

}
