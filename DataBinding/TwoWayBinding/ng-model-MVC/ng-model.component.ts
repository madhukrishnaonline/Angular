import { ProductContract } from '../../../../Contracts/productContract';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent 
{
    public Product:ProductContract=
    {
      Name:"",
      Price: 0,
      Qty: 0,
      Stock: false,
      ShippedTo: "",
      // Rating:[Rate:"",Count:""]
    }
    public UpdatedProduct:ProductContract=
    {
      Name:"",
      Price: 0,
      Qty: 0,
      Stock: false,
      ShippedTo: "",
    }
     RegisterClick():void
    {
      this.Product = this.UpdatedProduct;
    }
}
