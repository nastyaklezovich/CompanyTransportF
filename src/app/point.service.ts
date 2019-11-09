import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PointService {

  uri = 'https://localhost:80';

  constructor(private http: HttpClient) { }

  get_point_name(){
    return this
    .http
    .get(`${this.uri}/points`);
  };
}