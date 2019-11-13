import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../../company.service'
import { TransportService } from '../../transport.service';
import Company from '../../Company'
import Transport from '../../Transport';

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
        name_transport: ['', Validators.required],
        speed: ['', Validators.required],
        id_company: ['', Validators.required],
        max_weight: ['', Validators.required],
        tariff_plan: ['', Validators.required],
      }
    )
  }

  ngOnInit() {
    this.cs.get_compamies().subscribe((data: Company[]) => {
      console.log(data);
      this.companies = data;
    });
  }

  add_transport(name_transport, speed, id_company, max_weight, tariff_plan){
    this.ts.add_transport(name_transport, speed, id_company, max_weight, tariff_plan)  
  }

}
