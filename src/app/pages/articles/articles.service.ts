import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/app/core/interfaces/article.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url = environment.urlApi + '/articles'

  constructor(
    private http: HttpClient
  ) { }

  findAll(){
    return this.http.get<Article[]>(this.url);
  }
}
