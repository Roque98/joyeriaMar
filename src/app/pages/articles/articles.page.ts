import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/core/interfaces/appState.interface';
import { Article } from 'src/app/core/interfaces/article.interface';
import { Category } from 'src/app/core/interfaces/category.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss']
})
export class ArticlesPage implements OnInit, OnDestroy {


  article: Article | undefined;
  categories: Category[] | undefined;
  subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { 
    this.activatedRoute.params.subscribe((params) => {
      const idArticle = params.idArticle;
      this.getArticle(idArticle);
      this.getCategories(idArticle);
    })
  }


  private getArticle(idArticle: string){
    this.store.select('articlesFeature').subscribe((articleState) => {
      this.article = articleState.articles.find(article => article._id === idArticle)
      if(!this.article){
      this.route.navigateByUrl('/home')
      }
    })
  }

  public getCategories(idArticle: string){
    this.store.select('categoriesFeature').subscribe((categoriesState) => {
      this.categories = categoriesState.categories.filter(category => category.articleId === idArticle)
    })
  }

  // public getProduct(){
  //   return this.getCategory()?.products.find( product => product._id === this.idProduct )
  // }

  ngOnInit(): void {
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
