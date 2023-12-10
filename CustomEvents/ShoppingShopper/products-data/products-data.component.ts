import { Component, OnInit } from '@angular/core';
import { FakeStoreProductContract } from 'projects/shopping/src/app/Contracts/fakestoreProductContract';

@Component({
  selector: 'app-products-data',
  templateUrl: './products-data.component.html',
  styleUrls: ['./products-data.component.css']
})
export class ProductsDataComponent implements OnInit
{
  public Products:FakeStoreProductContract[]=[];

  public All:number=0;
  public Electronics:number=0;
  public Jewelery:number=0;
  public MensClothing:number=0;
  public WomensClothing:number=0;

  ngOnInit(): void 
  {
     fetch("http://fakestoreapi.com/products")     
     .then(Response=>Response.json())
     .then(data=>
      {
        this.Products=data;
        this.All = data.length;
        this.Electronics = data.filter((product:any)=>product.category=='electronics').length;
        this.Jewelery = data.filter((product:any)=>product.category=='jewelery').length;
        this.MensClothing = data.filter((product:any)=>product.category=='men\'s\ clothing').length;
        this.WomensClothing = data.filter((product:any)=>product.category=='women\'s\ clothing').length;
      });
  }

  public ProductChanged(e:any)
  {
    if(e=='All')
    {
       fetch('http://fakestoreapi.com/products')
       .then(Response=>Response.json())
       .then(data=>
        {
          this.Products = data;
        })
    }
    else
    {
      fetch(`http://fakestoreapi.com/products/category/${e}`)
      .then(Response=>Response.json())
      .then(data=>
       {
         this.Products = data;
       })   
    }
  }
}
