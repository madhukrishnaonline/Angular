import { Component, OnInit } from '@angular/core';
import { FakeStoreProductContract } from '../../../Contracts/fakestoreProductContract';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.css']
})
export class LazyLoadingComponent implements OnInit
{
  public Products:FakeStoreProductContract[]=[];
   ngOnInit(): void {
       fetch("https://fakestoreapi.com/products")
       .then(Response=>Response.json())
       .then(data=>
        {
          this.Products = data;
        });
   }
}
