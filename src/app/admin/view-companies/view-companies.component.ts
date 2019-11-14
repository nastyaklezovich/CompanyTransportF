import { Component, OnInit } from '@angular/core';
import Company from '../../Company';
import {CompanyService} from '../../company.service';

@Component({
  selector: 'app-view-companies',
  templateUrl: './view-companies.component.html',
  styleUrls: ['./view-companies.component.css']
})
export class ViewCompaniesComponent implements OnInit {

  companies: Company [];

  constructor(private cs: CompanyService) { }

  ngOnInit() {
    this.cs.get_compamies().subscribe((data: Company[]) => {
      console.log(data);
      this.companies = data;
    });
  }

  delete_company(id){
    this.cs.delete_company(id).subscribe(res => {
      console.log(id);
      console.log('Deleted');
    });
  }

}
