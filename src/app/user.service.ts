import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BaseService } from 'src/app/core/services/base.service'


@Injectable({
    providedIn: 'root'
})

export class UserService {


    uri = "https://localhost:80";

    constructor(private http: HttpClient) { }

    registration(user) {

        console.log(user);

        this.http.post(`${this.uri}/user`, user)
            .subscribe(res => { console.log('Done'); alert('Пользователь был добавлен!') },
                error => { alert('Ошибка добавления пользователя!') });

    }

    get_users() {
        return this
            .http
            .get(`${this.uri}/users`);
    }

    delete_user(id) {
        return this
            .http
            .delete(`${this.uri}/user/${id}`);
    }

}