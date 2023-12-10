import { Component, OnInit } from '@angular/core';
import { FakeStoreProductContract } from '../../../Contracts/fakestoreProductContract';

@Component({
  selector: 'app-shoppers-website',
  templateUrl: './shoppers-website.component.html',
  styleUrls: ['./shoppers-website.component.css']
})
export class ShoppersWebsiteComponent implements OnInit
{
  public Products:FakeStoreProductContract[] =[];
  public Categories:string[] = [];
  public isCartVisible:boolean=false;
  public ProductPrice:number=0;

  public LoadCategories():void
  {
    fetch("http://fakestoreapi.com/products/categories")
    .then(Response =>Response.json())
    .then(data=>
      {
         data.unshift("all");
         this.Categories = data;
      })
  }

  public LoadProducts(url:string)
  {
    fetch(url)
    .then(Response =>Response.json())
    .then(data=>
      {
         this.Products = data;
      })
  }
  ngOnInit(): void {
      this.LoadProducts(`http://fakestoreapi.com/products`);
      this.LoadCategories();
      this.LoadCartItems();
  }

  public CartItems:FakeStoreProductContract[]=[];
  public CartItemsCount:number=0;

  public LoadCartItems():void
  {
    this.CartItemsCount = this.CartItems.length;
  }

  public AddToCartItems(id:number):void
  {
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(Response =>Response.json())
    .then(data=>
      {
        this.CartItems.push(data);
        alert(`${data.title}\n AddedToCart`);
        this.LoadCartItems();
      })
  }
  public ShowCartItems():void
  {
      this.isCartVisible = (this.isCartVisible==false)?true:false;
  }

  public RemoveClick(index:number):void
  {
     this.CartItems.splice(index,1);
     this.LoadCartItems();
  }
  public ProductChanged(CategoryName:string):void
  {
     if(CategoryName=="all")
     {
       this.LoadProducts(`http://fakestoreapi.com/products`);
     }
     else
     {
       this.LoadProducts(`http://fakestoreapi.com/products/category/${CategoryName}`);
     }
  }
}
