import Rx from 'rxjs/Rx';

let elem = document.getElementById('input');
let keyStream$ = Rx.Observable.fromEvent(elem, 'keyup');

let starwarsStream$ = keyStream$
.map(ev => ev.key)
.filter(key => elem.value.length > 3)
.filter( key => key !== 'Backspace')
.flatMap( key => 
  Rx.Observable
  .from(getStarwarsCharacterStream(key))
);

let longRunningStream$ = keyStream$
.map(ev => ev.key)
.filter(key => elem.value.length >3)
.filter( key => key !== 'Backspace')
.switchMap( key => 
  Rx.Observable
  .from(longRunningTask(elem.value))
);

//starwarsStream$.subscribe( json => console.log(json));
longRunningStream$.subscribe( data => console.log(data));


function longRunningTask(input) {
return new Promise(resolve => {
  setTimeout(() => {
    resolve('response based on ' + input);
  }, 5000);
});
}

function getStarwarsCharacter() {
return fetch('https://swapi.co/api/people/1')
  .then(data => data.json())
  .then(x => console.log(x));
}

function getStarwarsCharacterStream(id) {
return fetch('https://swapi.co/api/people/' + id)
  .then(data => data.json());
}




//getStarwarsCharacter();