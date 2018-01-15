import Rx from 'rxjs/Rx';

let subject = new Rx.Subject();

subject.subscribe(data => console.log(data));
subject.next(10);

setTimeout(() => {
  subject.next(100);
}, 2000);