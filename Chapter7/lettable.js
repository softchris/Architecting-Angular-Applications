import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';
import { Observable } from 'rxjs/Observable';

let stream = Observable.of(1,2);
stream.pipe(
  map(x => x + 1),
  filter(x => x > 1)
)
.subscribe(x => console.log('piped', x));