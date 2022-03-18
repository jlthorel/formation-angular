import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortproduct'
})
export class SortproductPipe implements PipeTransform {

  transform(value: any[], property : string ): any[] {
    let arrayToReturn =  value.sort((a, b) => {
      if (a[property] > b[property]) {
        return 1;
      }
      else if (a[property] < b[property]) {
        return -1
      }
      return 0;
    });
     return arrayToReturn;
  }
 

}