import { Component, OnInit } from '@angular/core';
import { FakeStoreProductContract } from '../../../Contracts/fakestoreProductContract';

@Component({
  selector: 'app-fake-store',
  templateUrl: './fake-store.component.html',
  styleUrls: ['./fake-store.component.css']
})
export class FakeStoreComponent implements OnInit
{
  public Product:FakeStoreProductContract=
  {
    id:0,
    title:"",
    price:0,
    description:"",
    category:"",
    image:"",
    rating:{rate:0,count:0}
  }
  public LoadProducts(id:number):void
  {
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(Response=>Response.json())
    .then(data=>
     {
       this.Product=data;
     })
  }
 ngOnInit(): void 
 {
     this.LoadProducts(1);
 }
 public count=1;
 public PreviousClick():void
 {
    this.count--;
    this.LoadProducts(this.count);
 }
 public NextClick():void
 {
  this.count++;
  this.LoadProducts(this.count);
 }
}
