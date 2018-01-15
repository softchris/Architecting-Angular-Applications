import Rx from 'rxjs/Rx';

Rx.Observable
  .ajax('https://swapi.co/api/people/1')
  .map(r=> r.response)
  .subscribe(data => console.log('from ajax()', data));