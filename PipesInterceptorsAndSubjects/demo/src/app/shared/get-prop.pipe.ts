import { Pipe, PipeTransform } from '@angular/core';
import { AnyRecord } from 'dns';

@Pipe({
  name: 'getProp'
})
export class GetPropPipe implements PipeTransform {

  transform(value: Record<string | number, any> | any[],path: (string |number)[]): any {
    if(
      value === null ||
      typeof value !== 'object'
      ) { return null;}

    let result = value;
    for (const currentPath of path) {
      result = result[currentPath as any];
      if(!result) {return result;}
    }
    return result;
  }

}
