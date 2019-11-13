import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  uri = "https://localhost:80";

  constructor(private http: HttpClient) { }

  add_company(name_company, phone_number_company, email_company, type_transportation_company, description_company) {
    const obj = {
      name_company: name_company,
      phone_number_company: phone_number_company,
      email_company: email_company,
      type_transportation_company: type_transportation_company,
      description_company: description_company,
    };

    console.log(obj);

    this.http.post(`${this.uri}/company`, obj)
      .subscribe(res => { console.log('Done'); alert('Компания была добавлена!') },
      error=>{alert('Ошибка добавления компании!')});
  }


  delete_company(id) {
    return this
      .http
      .delete(`${this.uri}/company/${id}`);
  }

  get_compamies() {
    return this
      .http
      .get(`${this.uri}/companies`);
  };

  edit_company(id) {
    return this.http.get(`${this.uri}/company/${id}`);
  }

  updateDepartment(name_company, phone_number_company, email_company, type_transportation_company, description_company, id) {

    const obj =  {
      name_company: name_company,
      phone_number_company: phone_number_company, 
      email_company: email_company, 
      type_transportation_company: type_transportation_company, 
      description_company: description_company
    };
    
    this
      .http
      .put(`${this.uri}/company/${id}`, obj)
      .subscribe(
        res => console.log('Done'),
        error => alert("Невозможно обновить данные о компании"));
  }

}


