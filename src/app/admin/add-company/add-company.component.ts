import { Component, OnInit } from '@angular/core';
import Company from '../../Company';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CompanyService} from '../../company.service';

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

   createForm(){
     this.addCompanyForm = this.fb.group(
       {
        name_company: ['', Validators.required],
        phone_number_company:['', Validators.required],
        email_company: ['', Validators.required],
        type_transportation_company: ['', Validators.required],
        description_company: ['', Validators.required],
       }
     )
   }

  ngOnInit() {
  }

  add_company(name_company, phone_number_company, email_company, type_transportation_company, description_company){
    this.acs.add_company(name_company, phone_number_company, email_company, type_transportation_company, description_company)  
  }

}
