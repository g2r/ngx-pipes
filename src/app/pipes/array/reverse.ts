import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {

  transform(value:string):string;
  transform(value:any[]):any[];
  transform(value: string | any[]): any
  {
    if (typeof value === 'string') {
      return value.split('').reverse().join('');
    }
    if (Array.isArray(value)) {
      return value.reverse();
    }
    return value;
  }
}
