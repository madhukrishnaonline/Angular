import { Component, OnInit } from '@angular/core';
import { SentencePipe } from '../Custom-Pipes/sentence.pipe';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit
{
   public title:string = 'wELcoMe tO aNGUlar'
   public Product:{Name:string,Rate:number,Mfd:Date|string, Price:number,ShippedTo:string}[] = [
    {Name:'iPhone XS Max 64GB Black (MCTN2LL)',Rate:4.50,Mfd:'jun-12-23', Price :11500.9980, ShippedTo:'dhone'},
    {Name:"SamsunG tv",Rate:3.30,Mfd:'mar-10-23', Price:44000.4530,ShippedTo:"kurnOOL"},
    {Name:"macBook AiR Pro",Rate:4.90,Mfd:'jan-26-23', Price:124000.9876,ShippedTo:"bethamcherla"},
    {Name:"lg refregerator",Rate:5.00,Mfd:new Date(), Price:35000.4350,ShippedTo:"vEldhuRthi"}
   ];

   public cities:string[] = [
      "mumbai",
      "delhi",
      "hyd",
      "bangalore",
      "bethamcherla"
   ];
   public products:string[]= [
    "iPhone XS Max 64GB Black (MCTN2LL)",
    "SamsunG tv",
    "macBook AiR Pro",
    "lg refregerator"
   ]

   public Status:any = 
   {
      "dhone" : "Delivery in 4 Days",
      "kurnOOL" : "Delivery in 2 Days",
      "bethamcherla" : "Usually Despatched in 3-5 Days",
      "vEldhuRthi" : "Usually Despatched in 4-6 Days"
   };

   public Messages:string[] = [];
   public Count:number = 0;
   public message:string = '';
   public ShowMessages:boolean = false;

   public map = 
   {
      '=0':'No New Msgs',
      '=1':'1 New Msg',
      '=2':'2 New Msgs',
      'other':'# New Msgs'
   }

   public SendMsg()
   {
      var now = new Date();
      this.Messages.push(this.message +" --- "+now.toLocaleTimeString());
      alert('Message sent');
      this.Count = this.Messages.length;
      this.message = '';
   }

   ngOnInit(): void {
       this.Count = this.Messages.length;
   }
   public ShowMsgs()
   {
      this.ShowMessages = (this.ShowMessages==true)?false:true;
   }
}
