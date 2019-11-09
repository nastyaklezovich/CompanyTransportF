import { Component, OnInit } from '@angular/core';
import User_order from '../../User_order';
import { UserOrderService } from '../../../app/user-order.service'

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  user_order: User_order[];

  error:any;
  isOk: boolean;

  constructor(private uos: UserOrderService) { }

  ngOnInit() {
    this.uos.getUserOrders().subscribe((data: User_order[]) => {
      console.log(data);
      this.user_order = data;
      this.isOk=true;
    },
    error => {if(error.status === 204){this.isOk=false}; this.error = error.message; console.log(error);}
    );
  }

}
