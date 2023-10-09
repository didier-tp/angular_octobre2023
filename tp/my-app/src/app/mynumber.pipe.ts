import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mynumber'
})
export class MynumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let val = Number(value);
    let param :string = <string> args[0];
    let maxiDigit = Number(param.split("-")[1]);//ameliorable
    return val.toFixed(maxiDigit);
    
  }

}
