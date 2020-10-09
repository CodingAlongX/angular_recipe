import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'A test recipe',
      'https://i.ytimg.com/vi/Y8raTDLQJ_I/hqdefault.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('Test Recipe 2', 'A test recipe',
      'https://i.ytimg.com/vi/Y8raTDLQJ_I/hqdefault.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]),
    new Recipe('Test Recipe 3', 'A test recipe',
      'https://i.ytimg.com/vi/Y8raTDLQJ_I/hqdefault.jpg',
      [
        new Ingredient('French Fries', 20),
        new Ingredient('Buns', 2),
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): any {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): any {
    this.shoppingListService.addIngredients(ingredients);
  }
}
