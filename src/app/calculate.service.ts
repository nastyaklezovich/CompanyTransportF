import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CalculateService {

  uri = 'https://localhost:80';

  constructor(private http: HttpClient) { }

  make_order(obj) {
    console.log(obj);
    this.http.post(`${this.uri}/userOrder`, obj)
      .subscribe(res => { alert('Ваш заказ принят') },
      error=>{
        alert('Ваш заказ отклонен')
      });
  }
}