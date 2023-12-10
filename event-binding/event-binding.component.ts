import { Component } from '@angular/core';
import { UserName } from '../../../Contracts/UserNames';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent 
{
  public Img_Src:string = '../../../../assets/indian-flag.gif';

 public Users:UserName[]=[
  {Username:'madhu143'},
  {Username:'krishna143'},
  {Username:'madhukrishna143'},
  {Username:'mk1234'},
  {Username:'krish1543'}
 ];

 public VerifyName:string='';
 public isInvalid:boolean=false;
//  public MsgError:string='';

   public VerifyUser(e:any)
   {
     for(var user of this.Users) 
     {
       if(user.Username==e.target.value)
       {
         this.VerifyName='UserName Taken- try Another...';
         this.isInvalid=true;
         break;
       }
       else
       {
        this.VerifyName='UserName Available..';
        this.isInvalid=false;
        break;
       }
     }
   }

   public VerifyMsg(e:any)
   {
     if(e.target.value=="")
     {
        this.VerifyName='UserName Required';
        this.isInvalid=true;
     }
     else
     {
      this.VerifyName='';
     }
   }

   public VerifyPwd:string='';
   public isPwdInvalid:boolean=false;

   public VerifyPassword(e:any)
   {
      if(e.keyCode>=65 && e.keyCode<=90)
      {
        this.isPwdInvalid=true;
      }
      else
      {
        this.isPwdInvalid=false;
      }
   }

   public PwdFocus()
   {
        this.VerifyPwd='Caps Not Allowed'
   }

   public PwdBlur()
   {
        this.VerifyPwd='';
   }

   public SubmitInfo()
   {
    
   }

   public StyleObj:{'position':string,'left':string,'top':string}=
   {
      position:'',
      left:'',
      top:''
   }
   public MoveObject(e:any)
   {
    this.StyleObj=
    {
      position:'fixed',
      left:e.clientX +'px',
      top:e.clientY +'px'
    } 
   }
}
