import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataLength'
})
export class DataLengthPipe implements PipeTransform {

  transform(data:any[] , num:number):any[]{
    return data.slice(0 , num);
  }

}
