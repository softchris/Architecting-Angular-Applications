import Rx from 'rxjs/Rx';

function comparePeople(firstPerson, secondPerson) {
  if (firstPerson.age > secondPerson.age) {
    return 1; 
  } else if (firstPerson.age < secondPerson.age) {
    return -1;
  } 
  return 0;
}

let streamOfOfObjects$ = Rx.Observable
  .of({
    name : 'Yoda',
    age: 999
  }, {
    name : 'Chris',
    age: 38 
  })
  .max(comparePeople);

  streamOfOfObjects$.subscribe(data => console.log(data));