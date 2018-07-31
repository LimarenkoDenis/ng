import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'asyncSearchPipe'
})
export class AsyncSearchPipePipe implements PipeTransform {

  transform(value: Observable<number>, args?: string): any {
    // return value
    return value.pipe(
      map((item: number) => item * item)
    );
  }

}
