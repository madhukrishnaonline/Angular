import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
   public Menu:string[] = ["Non-Veg Item","Chicken Fried Biriyani","Spl Chicken Fried rice","Chicken Shawarma"];

   public Shoppers:{Category:String,Products:String[]}[]=[
    {
      Category:"Electronics",
      Products:["MacBook Air Pro","Realme Mobile","Apple TV"]
    },
    {
      Category:"FootWear",
      Products:["Sneakers","Sports Shoe","Casuals"]
    }
   ];
}
