import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  uri = "https://localhost:80";

  constructor(private http: HttpClient) { }

  add_company(obj) {

    console.log(obj);

    this.http.post(`${this.uri}/company`, obj)
      .subscribe(res => { console.log('Done'); alert('Компания была добавлена!') },
        // error => { alert('Ошибка добавления компании!') });
      );
  }


  delete_company(id) {
    return this
      .http
      .delete(`${this.uri}/company/${id}`);
  }

  get_companies() {
    return this
      .http
      .get(`${this.uri}/company`);
  };

  edit_company(id) {
    return this.http.get(`${this.uri}/company/${id}`);
  }

  update_company(obj, id) {
    this
      .http
      .put(`${this.uri}/company/${id}`, obj)
      .subscribe(
        res => console.log('Done'),
        error => alert("Невозможно обновить данные о компании"));
  }

}


