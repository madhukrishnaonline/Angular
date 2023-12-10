import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform 
{
  transform(collection:string[], reverse?:boolean)
  {
    if(reverse==true)
    {
      collection.sort();
      collection.reverse();
      return collection;
    }
    else
    {
      return collection.sort();
    }
  }

}
