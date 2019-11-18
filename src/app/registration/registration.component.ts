import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private us: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: ["", Validators.required],

      password: ['', [Validators.required]],

      role: ["", Validators.required],
      phone_number: ["", Validators.required],
    })
  }

  registration(first_name, last_name, email, password, phone_number) {

    const user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      role: 'user',
      phone_number: phone_number,
    }

    this.us.registration(user);

  }

}
