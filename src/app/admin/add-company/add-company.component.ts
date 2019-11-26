import { Component, OnInit } from '@angular/core';
import Company from '../../Company';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {


  addCompanyForm: FormGroup;

  constructor(private fb: FormBuilder, private acs: CompanyService) {
    this.createForm();
  }

  createForm() {
    this.addCompanyForm = this.fb.group(
      {
        name_company: ['', Validators.compose([
          Validators.maxLength(25),
          Validators.minLength(3),
          Validators.pattern('^[A-Za-zА-Яа-яЁё]+$'),
          Validators.required
        ])],
        phone_number_company: ['', Validators.compose([
          Validators.pattern('375[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}'),
          Validators.required
        ])],

        email_company: ['', Validators.compose([
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'),
          Validators.required
        ])],
        description_company: ['', Validators.required],
      }
    )
  }

  ngOnInit() {
  }

  add_company(name_company, phone_number_company, email_company, description_company) {

    const obj = {
      name_company: name_company,
      phone_number_company: phone_number_company,
      email_company: email_company,
      description_company: description_company,
    };

    this.acs.add_company(obj)
  }

  account_validation_messages = {
    'name_company': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Название может содержать только символьные значения' },
      { type: 'minlength', message: 'Название должно содержать не менее 3 символов' },
      { type: 'maxlength', message: 'Название не может содержать больше 25 символов' },
    ],
    'phone_number_company': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Номер должен соответствовать паттерну (375__-___-__-__)' },
    ],
    'email_company': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Email должен соответствовать паттерну youremail@company.com' },
    ],

  }

}
