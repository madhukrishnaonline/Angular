import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css']
})
export class ProductFiltersComponent 
{
  @Input() public AllCount:number=0;
  @Input() public Electronics:number=0;
  @Input() public Jewelery:number=0;
  @Input() public MensClothing:number=0;
  @Input() public WomensClothing:number=0;

  public CategoryName:string='All';

  @Output() public ChangeProducts:EventEmitter<string> = new EventEmitter<string>();

  public CategoryChanged(e:any)
  {
     this.ChangeProducts.emit(e.target.value)
  }
}
