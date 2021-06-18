import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.urlApi + '/products'

  constructor(
    private http: HttpClient
  ) { }

  getProduct(id:string){
    return this.http.get<Product>(`${this.url}/${id}`)
  }
}
