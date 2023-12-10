import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent 
{
   public bg:string='';
   public color:string='';
   public radius:string='0px';
   public padding:string='0px';

   public styleObj:{'background-color':string,'color':string,'padding':string,'border-radius':string}=
   {
      "background-color":'blue',
      "color":'red',
      'padding':'10px',
      "border-radius":'20px'
   }
   public ApplyEffects()
   {
      this.styleObj={
        'background-color':this.bg,
        'color':this.color,
        'padding':this.padding +'px',
        'border-radius':this.radius+'px'
      }
   }
}
