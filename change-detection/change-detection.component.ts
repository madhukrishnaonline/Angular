import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent
{
  public UserName:string|null = null;
  public msg:string = '';


}
