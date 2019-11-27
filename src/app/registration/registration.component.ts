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
      first_name: ['', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.pattern('^[A-Za-zА-Яа-яЁё]+$'),
        Validators.required
      ])],
      last_name: ['', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.pattern('^[A-Za-zА-Яа-яЁё]+$'),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])],
      role: ["", Validators.required],
      phone_number: ['', Validators.compose([
        Validators.pattern('375[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'),
        Validators.required
      ])],
    })
  }

  registration(first_name, last_name, email, password, phone_number) {

    const user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      role: 'USER',
      phone_number: phone_number,
    }

    this.us.registration(user);

  }

  account_validation_messages = {
    'first_name': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'minlength', message: 'Имя должно содержать не менее 3 символов' },
      { type: 'maxlength', message: 'Имя не может содержать больше 25 символов' },
      { type: 'pattern', message: 'Имя может содержать только символьные значения' },
    ],
    'last_name': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'minlength', message: 'Фамилия должно содержать не менее 3 символов' },
      { type: 'maxlength', message: 'Фамилия не может содержать больше 25 символов' },
      { type: 'pattern', message: 'Фамилия может содержать только символьные значения' },
    ],
    'email': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Email должен соответствовать паттерну youremail@company.com' },
    ],
    'password': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'minlength', message: 'Пароль должен содержать не менее 5 символов' },

    ],
    'phone_number': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Номер должен соответствовать паттерну (375__-___-__-__)' },

    ],
  }

}
