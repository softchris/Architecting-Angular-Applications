import Rx from 'rxjs/Rx';

let fetchStream = Rx.Observable.from(
  fetch('https://swapi.co/api/people/1')
)
.map( r => Rx.Observable.from(r.json()))
.subscribe(data => console.log('fetch() converted to stream', data));
