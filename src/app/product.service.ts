import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    uri = "https://localhost:80";

    constructor(private http: HttpClient) { }

    get_products(id) {
        return this.http.get(`${this.uri}/product/carrier/map/${id}`);
    }

    get_optimal_product(id){
        return this.http.get(`${this.uri}/product/carrier/optimal/map/${id}`)
    }

    
}
