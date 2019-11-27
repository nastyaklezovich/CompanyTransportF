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
    .get(`${this.uri}/point`);
  };

  add_point(obj){
    this.http.post(`${this.uri}/point`, obj)
      .subscribe(res => { console.log('Done'); alert('Точка была добавлена!') },
        error => { alert('Ошибка добавления точки!') });
  
  }
}