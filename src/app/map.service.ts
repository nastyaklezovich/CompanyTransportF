import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MapService {

  uri = 'https://localhost:80';

  constructor(private http: HttpClient) { }

  add_map(mapList) {

    console.log(mapList);

    this.http.post(`${this.uri}/map`, mapList)
      .subscribe(res => { console.log('Done'); alert('Маршрут был добавлен!') },
        error => { alert('Ошибка добавления маршрута!') });
  }

  get_maps() {
    return this
      .http
      .get(`${this.uri}/map`);
  };

  accept_map(id): any {
    this.http.post(`${this.uri}/map`, id);
    console.log(id);
  }

  edit_map(id) {
    return this.http.get(`${this.uri}/map/${id}`)
  }

}