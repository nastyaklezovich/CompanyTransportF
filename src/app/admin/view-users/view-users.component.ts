import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: User[];

  constructor(private us: UserService) { }

  ngOnInit() {
    this.us.get_users().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    })
  }

  delete_user(id) {
    this.us.delete_user(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

}
