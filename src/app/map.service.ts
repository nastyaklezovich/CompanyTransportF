import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MapService {

  uri = 'https://localhost:80';

  constructor(private http: HttpClient) { }

  getMaps() {
    return this
      .http
      .get(`${this.uri}/maps`);
  };

  acceptMap(id): any {
    this.http.post(`${this.uri}/map`, id);
    console.log(id);
  }
}