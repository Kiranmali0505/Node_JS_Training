import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'review'
})
export class ReviewPipe implements PipeTransform {

  transform(rates: any, ...args: unknown[]): unknown {
    console.log('rate:', rates);
    const value = Math.round(rates);
    if (value === 10) {
      return 'Must Read';
    } else if (value === 9) {
      return 'can refresh your minds';
    } else if (value === 8) {
      return 'travel :good for long journey';
    } else if (value === 7) {
      return 'Makes new attempt to reach';
    } else if (value === 6) {
      return 'worth reading';
    } else if (value === 5) {
      return 'when you have time';
    } else if (value === 4) {
      return 'okay readble';
    } else if (value === 3) {
      return 'even you miss you can use try';
    } else if (value === 2) {
      return 'good for time pass';
    } else if (value === 1) {
      return 'when you can not find anything';
    }
  }

}
