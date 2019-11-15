import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CalculateService {

  uri = 'https://localhost:80';

  constructor(private http: HttpClient) { }

  find_route(start_point, end_point, weight_product, volume_product) {
    const obj = {
      start_point: start_point,
      end_point: end_point,
      weight_product: weight_product,
      volume_product: volume_product,
    };

    console.log(obj);

    this.http.post(`${this.uri}/map`, obj)
      .subscribe(res => { console.log('Done'); });
  }
}