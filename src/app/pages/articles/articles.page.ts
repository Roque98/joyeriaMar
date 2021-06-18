import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss']
})
export class ArticlesPage implements OnInit {

  categories = [
    {
      _id: '1',
      name: 'iniciales',
      image: ''
    },
    {
      _id: '2',
      name: 'nombres',
      image: ''
    },
    {
      _id: '3',
      name: 'cruz',
      image: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
