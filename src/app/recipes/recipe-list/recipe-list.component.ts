import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'A test recipe', 'https://i.ytimg.com/vi/Y8raTDLQJ_I/hqdefault.jpg'),
    new Recipe('Test Recipe 2', 'A test recipe', 'https://i.ytimg.com/vi/Y8raTDLQJ_I/hqdefault.jpg'),
    new Recipe('Test Recipe 3', 'A test recipe', 'https://i.ytimg.com/vi/Y8raTDLQJ_I/hqdefault.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
