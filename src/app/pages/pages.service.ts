import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from '../core/interfaces/article.interface';
import { Category } from '../core/interfaces/category.interface';
import { Product } from '../core/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  url = environment.urlApi;

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get<{articles: Article[], categories: Category[], products: Product[]}>(this.url);
  }
}
