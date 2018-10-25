import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

export const Greeter = (name: string) => `Hello ${name}`;

export const countDown = (from: number) => {
  return interval(1000).pipe(
    map(value => from - value),
    take(from),
  );
};
