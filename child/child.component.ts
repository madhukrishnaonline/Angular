import { Component, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  @Input() public MsgFromParent:string='';
  public MsgToParent:string='';

  @Output() public ChildClick:EventEmitter<string> = new EventEmitter<string>();

  public SendMsgToParent()
  {
     this.ChildClick.emit('Hello Parent ! I\'m Child');
  }
}
