import { Component,TemplateRef,ViewChild,OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit
{
  public TemplateName:string = "Choose Template";
  public thenBlock:TemplateRef<any>|null = null;

  @ViewChild("Template1",{static:true}) public Template1:TemplateRef<any> | null = null;
  @ViewChild("Template2",{static:true}) public Template2:TemplateRef<any> | null = null;
  @ViewChild("Template3",{static:true}) public Template3:TemplateRef<any> | null = null;

  public ngOnInit(): void 
  {
     this.thenBlock = this.Template1;    
  }
  public TemplateChanged():void
  {
    switch(this.TemplateName)
    {
      case "Template1" :
      this.thenBlock = this.Template1;
      break;
      case "Template2" :
      this.thenBlock = this.Template2;
      break;
      case "Template3" :
      this.thenBlock = this.Template3;
      break;
      default:
        this.thenBlock = this.thenBlock;
    }
  }
}
