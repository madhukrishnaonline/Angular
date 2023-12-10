import { Component } from '@angular/core';

@Component({
  selector: 'app-flip-kart-ng-switch',
  templateUrl: './flip-kart-ng-switch.component.html',
  styleUrls: ['./flip-kart-ng-switch.component.css']
})
export class FlipKartNgSwitchComponent
{
  constructor(){}
  public ViewName:string = "BasicDetails";

  public ViewClick(viewName:string)
  {
    this.ViewName = viewName;
  }
}
