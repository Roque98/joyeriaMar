import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  categories = ['Collares', 'Aretes', 'Pulseras', 'Anillos'];
  items = [1,1,1];

  constructor() { }

  ngOnInit(): void {
  }

}
