import Rx from 'rxjs/Rx';

let stream = Rx.Observable
.interval(500)
.take(5);

let stream2 = Rx.Observable
.interval(500)
.take(3);

Rx.Observable.combineLatest(
  stream,
  stream2
).subscribe( data => console.log('combine', data)); 