import { Component } from '@angular/core';
import { ProductContract } from 'projects/shopping/src/app/Contracts/productContract';

@Component({
  selector: 'app-ng-model-mvvm',
  templateUrl: './ng-model-mvvm.component.html',
  styleUrls: ['./ng-model-mvvm.component.css']
})
export class NgModelMVVMComponent {
  public Product:ProductContract=
  {
    Name:"",
    Price: 0,
    Qty: 0,
    Stock: false,
    ShippedTo: "",
    // Rating:[Rate:"",Count:""]
  }
}
