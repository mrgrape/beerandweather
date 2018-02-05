import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {
  public days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  transform(time: any, args?: any): any {
    const date = new Date(time * 1000);
    return this.days[date.getDay()];
  }

}
