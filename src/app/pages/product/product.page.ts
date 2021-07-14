import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/core/interfaces/appState.interface';
import { Article } from 'src/app/core/interfaces/article.interface';
import { Category } from 'src/app/core/interfaces/category.interface';
import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit, OnInit {
  idProduct = '';

  article: Article | undefined;
  category: Category | undefined;
  product: Product | undefined;

  subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      // const idArticle = params.idArticle;
      // const idCategory = params.idCategory;
      this.idProduct = params.idProduct;

      // this.getArticle(idArticle);
      // this.getCategory(idCategory);
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProducts(this.idProduct);
    
  }

  private getArticle(idArticle: string) {
    this.store.select('articlesFeature').subscribe((articleState) => {
      this.article = articleState.articles.find(
        (article) => article._id === idArticle
      );
      if (!this.article) this.router.navigateByUrl('/article');
    });
  }

  public getCategory(idCategory: string) {
    this.store.select('categoriesFeature').subscribe((categoriesState) => {
      this.category = categoriesState.categories.find(
        (category) => category._id === idCategory
      );
      if (!this.article) this.router.navigateByUrl('/article');
    });
  }

  public getProducts(idProduct: string) {
    this.store.select('productsFeature').subscribe((productsState) => {
      this.product = productsState.products.find(
        (product) => product._id === idProduct
      );
      if (!this.product) this.router.navigateByUrl('/home');

      this.store.select('categoriesFeature').subscribe((categoryState) => {
        this.category = categoryState.categories.find(
          (category) => category._id === this.product?.categoryId
        );
        if (!this.product) this.router.navigateByUrl('/home');

        this.store.select('articlesFeature').subscribe((articleState) => {
          this.article = articleState.articles.find(
            (article) => article._id === this.category?.articleId
          );
        });
      });
    });
  }

}
