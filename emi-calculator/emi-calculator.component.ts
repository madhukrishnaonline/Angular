import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent {

  public principle:number=100000;
  public time:number=1;
  public rate:number=10.5;
  public Emi:number=0;
  public total:number=0;

  public AmountChange(e:any)
  {
    this.principle = e.target.value;
  }
  public TimeChange(e:any)
  {
    this.time = e.target.value;
  }
  public InterestChange(e:any)
  {
     this.rate = e.target.value;
  }

  public CalculateTotal()
  {
    var p = this.principle;
    var t = this.time*12;
    var r = this.rate/12/100;

    this.Emi = p*r*Math.pow(1+r,t)/Math.pow(1+r,t)-1;
    this.total = Math.round(this.Emi);
    // P x R x (1+R)^N / [(1+R)^N-1]
  }
}
