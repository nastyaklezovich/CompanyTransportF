import { Component, OnInit } from '@angular/core';
import { RoleType } from 'src/app/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  roles = [{ name: "USER" }, { name: "ADMIN" }];

  addUserForm: FormGroup;

  constructor(private fb: FormBuilder, private us: UserService) { }

  ngOnInit() {
    this.addUserForm = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: ["", Validators.required],
      password: ['', [Validators.required]],
      role: ["", Validators.required],
      phone_number: ["", Validators.required],
    })
  }

  registration(first_name, last_name, email, password, role, phone_number) {

    const user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      role: role,
      phone_number: phone_number,
    }

    this.us.registration(user);

  }
}


