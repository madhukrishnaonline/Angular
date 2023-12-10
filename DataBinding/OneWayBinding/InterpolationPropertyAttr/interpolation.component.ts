import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent 
{
   public UserName: string="Madhu";
   public Stock:boolean = false;
   public tWidth:number = 300;
   public tHeight:number = 200;
}
