import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/core/interfaces/appState.interface';
import { Article } from 'src/app/core/interfaces/article.interface';
import { Category } from 'src/app/core/interfaces/category.interface';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  
  article: Article | undefined;
  category: Category | undefined;
  products: Product[] = [];
  subscription = new Subscription();

  constructor(
    public store: Store<AppState>,
    public activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const idArticle = params.idArticle;
      const idCategory = params.idCategory;
      this.getArticle(idArticle);
      this.getCategory(idCategory);
      this.getProducts(idCategory);
    })
  }

  getArticle(idArticle: string){
    this.store.select('articlesFeature').subscribe((articleState) => {
      this.article = articleState.articles.find(article => article._id === idArticle)
      if(!this.article){
        this.router.navigateByUrl('/articles')
      }
    })
  }

  public getCategory(idCategory: string){
    this.store.select('categoriesFeature').subscribe((categoriesState) => {
      this.category = categoriesState.categories.find(category => category._id === idCategory)
      if(!this.category){
        this.router.navigateByUrl('/article')
      }
    })
  }

  getProducts(idCategory: string){
    this.store.select('productsFeature').subscribe((productsState) => {
      this.products = productsState.products.filter(product => product.categoryId === idCategory);
    })
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
