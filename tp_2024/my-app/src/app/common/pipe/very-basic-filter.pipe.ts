import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'veryBasicFilter'
})
export class VeryBasicFilterPipe implements PipeTransform {

  transform(values: string[], arg0: string): string[] {
    return values.filter(val => val.toLowerCase().includes(arg0.toLowerCase()));
  }

}
