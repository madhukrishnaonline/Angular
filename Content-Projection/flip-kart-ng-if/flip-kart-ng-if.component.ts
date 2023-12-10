import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';

@Component({
  selector: 'app-flip-kart-ng-if',
  templateUrl: './flip-kart-ng-if.component.html',
  styleUrls: ['./flip-kart-ng-if.component.css']
})
export class FlipKartNgIfComponent implements OnInit
{
  constructor(){}

  public thenBlock:TemplateRef<any>|null = null;
  

  @ViewChild("view1",{static:true}) public view1:TemplateRef<any>|null = null;
  @ViewChild("view2",{static:true}) public view2:TemplateRef<any>|null = null;
  @ViewChild("view3",{static:true}) public view3:TemplateRef<any>|null = null;
  @ViewChild("view4",{static:true}) public view4:TemplateRef<any>|null = null;
  @ViewChild("view5",{static:true}) public view5:TemplateRef<any>|null = null;
  @ViewChild("view6",{static:true}) public view6:TemplateRef<any>|null = null;
  @ViewChild("view7",{static:true}) public view7:TemplateRef<any>|null = null;
  @ViewChild("view8",{static:true}) public view8:TemplateRef<any>|null = null;
  @ViewChild("view9",{static:true}) public view9:TemplateRef<any>|null = null;

  ngOnInit(): void 
  {
    this.thenBlock = this.view1;    
  }

  public ViewChanged(ViewName:String):void
  {
    switch(ViewName)
    {
      case "view1":
      this.thenBlock = this.view1;
      break;
      case "view2":
      this.thenBlock = this.view2;
      break;
      case "view3":
      this.thenBlock = this.view3;
      break;
      case "view4":
      this.thenBlock = this.view4;
      break;
      case "view5":
      this.thenBlock = this.view5;
      break;
      case "view6":
      this.thenBlock = this.view6;
      break;
      case "view7":
      this.thenBlock = this.view7;
      break;
      case "view8":
      this.thenBlock = this.view8;
      break;
      case "view9":
      this.thenBlock = this.view9;
      break;
    }
  }
}
