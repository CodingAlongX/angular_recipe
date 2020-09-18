import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A test recipe', 'https://i.ytimg.com/vi/Y8raTDLQJ_I/hqdefault.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
