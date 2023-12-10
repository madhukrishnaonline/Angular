import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-properties-trackby',
  templateUrl: './ng-for-properties-trackby.component.html',
  styleUrls: ['./ng-for-properties-trackby.component.css']
})
export class NgForPropertiesTrackbyComponent 
{
  public Shoppers:any[] = [
      {Name: "TV", Price: 45000.44},
      {Name: "Mobile", Price:13400.44},
      {Name: "Shoe", Price: 5000.33}
  ];

  public UpdateProduct():void
  {
     this.Shoppers = [
      {Name: "TV", Price: 45000.44},
      {Name: "Mobile", Price:13400.44},
      {Name: "Shoe", Price: 5000.33},
      {Name:"Laptop",Price:154000}
     ]
  }

  public TrackProduct(index:number)
  {
     return index;
  }
}
