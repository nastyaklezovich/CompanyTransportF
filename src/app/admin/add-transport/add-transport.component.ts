import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../../company.service'
import { TransportService } from '../../transport.service';
import Company from '../../Company'


@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.css']
})
export class AddTransportComponent implements OnInit {

  addTransportForm: FormGroup;

  companies: Company[];


  constructor(private fb: FormBuilder, private cs: CompanyService, private ts: TransportService) {
    this.createForm();
  }

  createForm() {
    this.addTransportForm = this.fb.group(
      {
        name_transport: ['', Validators.compose([
          Validators.maxLength(25),
          Validators.minLength(3),
          Validators.required
        ])],
        speed: ['', Validators.compose([
          Validators.maxLength(3),
          Validators.pattern(/^[0-9]/),
          Validators.required
        ])],
        id_company: ['', Validators.required],
        max_weight: ['', Validators.compose([
          Validators.maxLength(4),
          Validators.pattern(/^[0-9]/),
          Validators.required
        ])],
        tariff_plan: ['', Validators.compose([
          Validators.maxLength(6),
          Validators.pattern(/^[0-9]/),
          Validators.required
        ])],
      }
    )
  }

  ngOnInit() {
    this.cs.get_compamies().subscribe((data: Company[]) => {
      console.log(data);
      this.companies = data;
    });
  }

  add_transport(name_transport, speed, id_company, max_weight, tariff_plan) {

    const obj = {
      name_transport: name_transport,
      speed: speed,
      id_company: id_company,
      max_weight: max_weight,
      tariff_plan: tariff_plan
    };
    console.log(obj);

    this.ts.add_transport(obj)
  }

  account_validation_messages = {
    'name_transport': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'minlength', message: 'Название должно содержать не менее 3 символов' },
      { type: 'maxlength', message: 'Название не может содержать больше 25 символов' },
    ],
    'speed': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Скорость может содержать только числовые значения' },
      { type: 'maxlength', message: 'Скорость не может содержать больше 3 символов' },
    ],
    'max_weight': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Максимальный вес может содержать только числовые значения' },
      { type: 'maxlength', message: 'Максимальный вес не может содержать больше 6 символов' },
    ],
    'tariff_plan': [
      { type: 'required', message: 'Заполните поле' },
      { type: 'pattern', message: 'Тариф может содержать только числовые значения' },
      { type: 'maxlength', message: 'Тариф не может содержать больше 6 символов' },
    ],
  }

}
