import { Component,OnChanges,Input,EventEmitter,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.css']
})
export class ChangesComponent implements OnChanges
{
   @Input() public UserName:string|null = null;
   public CurrentValue:string|null = null;
   public PreviousValue:string|null = null;
   public msg:string = '';
   
   ngOnChanges(changes: SimpleChanges)
   {
     for(var property in changes)
     {
        let change = changes[property];
        this.CurrentValue = change.currentValue;
        this.PreviousValue = change.previousValue;
     }
     if(this.CurrentValue==this.PreviousValue)
     {
      this.msg = 'No Change Detected';
     }
     else
     {
      this.msg = 'Change Detected';
     }
   }
}
