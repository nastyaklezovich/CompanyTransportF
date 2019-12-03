import { Component, OnInit } from '@angular/core';
import User_order from '../../User_order';
import { UserOrderService } from '../../../app/user-order.service'

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  user_orders: User_order[];

  constructor(private uos: UserOrderService) { }

  ngOnInit() {
    var aValue = JSON.parse(localStorage.getItem('user'));
    var id = aValue.idUser;
    console.log(id)
    this.uos.getUserOrders(id).subscribe((data: User_order[]) => {
      console.log(data);
      this.user_orders = data;
    });
  }

}
