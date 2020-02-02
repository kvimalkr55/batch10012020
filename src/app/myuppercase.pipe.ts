import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myuppercase'
})
export class MyuppercasePipe implements PipeTransform {
   
  transform(value: any, ...args: any[]): any {
    return value.toUpperCase();
  }

}
