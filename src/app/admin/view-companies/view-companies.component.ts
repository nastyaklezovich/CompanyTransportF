import { Component, OnInit, TemplateRef } from '@angular/core';
import Company from '../../Company';
import { CompanyService } from '../../company.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-view-companies',
  templateUrl: './view-companies.component.html',
  styleUrls: ['./view-companies.component.css']
})
export class ViewCompaniesComponent implements OnInit {

  companies: Company[];
  modalRef: BsModalRef;
  company: {} = {};
  res: {} = {};
  addCompanyForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private cs: CompanyService, private modalService: BsModalService) {
    this.createForm();
  }

  ngOnInit() {
    this.cs.get_companies().subscribe((data: Company[]) => {
      console.log(data);
      this.companies = data;
    });
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

  error: any;
  delete_company(id) {
    this.cs.delete_company(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');},
      error => {this.error = error.message; console.log(error);alert('Невозможно удалить!')}
    );
  }

  open_modal(template: TemplateRef<any>, id) {
    this.modalRef = this.modalService.show(template);
    console.log(id);
    this.cs.edit_company(id).subscribe(((res: Company[]) => {
      this.company = { ...res };
      this.res = res;
      console.log(res);
    }));
  }

  save(name_company, phone_number_company, email_company, description_company, id) {
    const obj = {
      name_company: name_company,
      phone_number_company: phone_number_company,
      email_company: email_company,
      description_company: description_company,
    };
    console.log(id);
    this.route.params.subscribe(params => {
      this.cs.update_company(obj, id);
      this.modalRef.hide();
    });
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
