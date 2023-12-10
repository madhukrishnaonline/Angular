import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent 
{
   public msg:string='';
   public MsgFromChild:string='';
   
   public GetMsgFromChild(e:string)
   {
    this.MsgFromChild=e;
   }

   public SendMsg()
   {
    this.msg='Hello Child ! I\'m Parent';
   }
}
