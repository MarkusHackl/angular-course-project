import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://3.bp.blogspot.com/-LRe4HNCJAMk/WM8EKOAwDkI/AAAAAAAADMg/SwynQgjwz1gdg6IfI5g3Ggdvc_XhFYvwgCLcB/s640/IMG_5831.JPG'
    ),
  ];
}
