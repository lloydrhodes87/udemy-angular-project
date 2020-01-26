import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'a test description', 'https://p0.pxfuel.com/preview/431/473/191/noodle-dish-chicken-farmer-cook.jpg'),
    new Recipe('A test recipe', 'a test description', 'https://p0.pxfuel.com/preview/431/473/191/noodle-dish-chicken-farmer-cook.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
