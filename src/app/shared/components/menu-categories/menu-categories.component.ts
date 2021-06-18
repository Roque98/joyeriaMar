import { Component, OnInit } from '@angular/core';


interface Article {
  name: string;
  categories: Category[];
}

interface Category {
  _id: string;
  name: string;
}

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.scss']
})
export class MenuCategoriesComponent implements OnInit {

  menu: Article[] = [
    {
      name: 'Collares',
      categories: [
        {
          _id: '1',
          name: 'Iniciales'
        },
        {
          _id: '2',
          name: 'Nombres'
        },
        {
          _id: '3',
          name: 'Cruz'
        }
      ]
    },
    {
      name: 'ARETES',
      categories: [
        {
          _id: '1',
          name: 'ARRACADAS'
        },
        {
          _id: '2',
          name: 'BROQUELES'
        },
        {
          _id: '3',
          name: 'EARCUFFS'
        }
      ]
    },
    {
      name: 'PULSERAS',
      categories: [
        {
          _id: '1',
          name: 'PULSERA PERSONALIZADA'
        },
        {
          _id: '2',
          name: 'PULSERAS DE IMÁN'
        },
        {
          _id: '3',
          name: 'ROMANOS'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
