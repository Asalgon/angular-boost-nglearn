import { Pipe, PipeTransform } from '@angular/core';
import { Observable, map, timer } from 'rxjs';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  public transform(endDate: string, startDate: string, format: string): Observable<string> | null{
    const source = timer(0, 1000);
    return source.pipe(
      map(n => this.msToTime(this.getMsDiff(endDate, startDate, n)!, format)!)
    );
  }

  // get milliseconds between dates
  private getMsDiff(endDate: string, startDate: string, current: number): number | null {
    let end: number = +new Date(endDate);
    let start: number = +new Date(startDate);
    let remainingMs = (end - start) - (current * 1000)

    if(remainingMs > 0){
      return remainingMs
    } else return null
  }

  // convert millisecondes into Date format
  private msToTime(msRemaining: number, format: string): string | null {
    let seconds: number = Math.floor((msRemaining / 1000) % 60),
      minutes: number = Math.floor((msRemaining / (1000 * 60)) % 60),
      hours: number = Math.floor((msRemaining / (1000 * 60 * 60)) % 24);

    let fseconds = seconds < 10 ? '0' + seconds : seconds;
    let fminutes = minutes < 10 ? '0' + minutes : minutes;
    let fhours = hours < 10 ? '0' + hours : hours;

    if(format.includes('h')){
      return `${fhours}:${fminutes}:${fseconds}`;
    } else if (format.includes('mm')){
      return `${fminutes}:${fseconds}`;
    } else if (format.includes('s')){
      return `${fseconds}`;
    } else return null
  }
}
