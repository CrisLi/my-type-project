import { Observable, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

export const hello = (name: string): string => `Hello ${name}`;

export const countDown = (from: number): Observable<number> => {
  return timer(0, 1000).pipe(
    map(value => from - value),
    take(from + 1)
  );
};
