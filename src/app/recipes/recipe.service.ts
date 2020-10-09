import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'A test recipe', 'https://i.ytimg.com/vi/Y8raTDLQJ_I/hqdefault.jpg'),
    new Recipe('Test Recipe 2', 'A test recipe', 'https://i.ytimg.com/vi/Y8raTDLQJ_I/hqdefault.jpg'),
    new Recipe('Test Recipe 3', 'A test recipe', 'https://i.ytimg.com/vi/Y8raTDLQJ_I/hqdefault.jpg'),
  ];

  getRecipes(): any {
    return this.recipes.slice();
  }
}
