import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('BestRecipe', 'This is simply a test','https://img.delicious.com.au/Whdi4i8g/w759-h506-cfill/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'),
    new Recipe('Chicken and broccoli', 'This is simply a test','https://img.taste.com.au/xS3yh158/taste/2022/09/chicken-and-broccoli-alfredo-stuffed-pasta-shells-recipe-181082-1.jpg'),
    new Recipe('Grated', 'This is simply a test','https://cf-images.us-east-1.prod.boltdns.net/v1/static/507936866/233cdec5-f06c-4f04-b829-50ffc3975cd3/c73a3904-30b1-4d0d-9576-5a427c0b34bb/1800x1001/match/image.jpg'),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
