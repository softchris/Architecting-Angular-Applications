import Rx from "rxjs/Rx";

let stream = Rx.Observable.of(0,1,2);

let addAndFilter = obs => obs.map( x=> x * 10).filter(x => x % 10 === 0);
let sub3 = obs => obs.map(x => x - 3);

stream
  .let(addAndFilter)
  .let(sub3)
  .subscribe(x => console.log('let', x));

