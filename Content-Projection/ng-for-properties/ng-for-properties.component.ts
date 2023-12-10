import { Component, OnInit } from '@angular/core';
import { FakeStoreProductContract } from '../../../Contracts/fakestoreProductContract';

@Component({
  selector: 'app-ng-for-properties',
  templateUrl: './ng-for-properties.component.html',
  styleUrls: ['./ng-for-properties.component.css']
})
export class NgForPropertiesComponent implements OnInit
{
   public Products:FakeStoreProductContract[] = [];
   constructor(){}
   
   ngOnInit(): void {
     fetch("http://fakestoreapi.com/products")    
     .then(Response=> Response.json())
     .then(data =>
      {
        this.Products = data;
      })
   }
}
