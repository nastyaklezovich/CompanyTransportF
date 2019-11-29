import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class TransportService {

    uri = "https://localhost:80";

    constructor(private http: HttpClient) { }

    add_transport(obj) {
        this
            .http
            .post(`${this.uri}/transport`, obj)
            .subscribe (
                res => { console.log('Done'); alert('Транспорт был добавлен!') },
                error => { alert('Ошибка добавления транспорта!') });
    }

    delete_transport(id) {
        return this
            .http
            .delete(`${this.uri}/transport/${id}`);
    }

    get_transports() {
        return this
            .http
            .get(`${this.uri}/transport`);
    };

    edit_transport(id) {
        return this
            .http
            .get(`${this.uri}/transport/${id}`);
    }

    update_transport(obj, id) {
        this
            .http
            .put(`${this.uri}/transport/${id}`, obj)
            .subscribe(
                res => { console.log('Done'), alert('Транспорт был изменен!') },
                error => { alert("Невозможно обновить данные о транпорте") });
    }

}
