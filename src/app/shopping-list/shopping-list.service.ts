import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(): any {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): any {
    this.ingredients.push(ingredient);
  }
}
