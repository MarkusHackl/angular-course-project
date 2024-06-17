import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://3.bp.blogspot.com/-LRe4HNCJAMk/WM8EKOAwDkI/AAAAAAAADMg/SwynQgjwz1gdg6IfI5g3Ggdvc_XhFYvwgCLcB/s640/IMG_5831.JPG'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://3.bp.blogspot.com/-LRe4HNCJAMk/WM8EKOAwDkI/AAAAAAAADMg/SwynQgjwz1gdg6IfI5g3Ggdvc_XhFYvwgCLcB/s640/IMG_5831.JPG'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
