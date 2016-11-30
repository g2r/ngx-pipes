import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'isGreaterEqualThan'})
export class IsGreaterEqualThanPipe implements PipeTransform {

  transform(value: number, other: number): boolean {
    return value >= other;
  }
}
