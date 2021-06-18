import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss']
})
export class CardArticleComponent implements OnInit {

  @Input() article = {
    _id: '1',
    name: 'iniciales',
    image: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

}
