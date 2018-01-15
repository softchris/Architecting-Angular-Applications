import Rx from 'rxjs/Rx';

let stream$ = Rx.Observable.create((observer) => {
  let i = 0;

  let id = setInterval(()=> {
    observer.next(i++)
  },400);

  return () => {
    clearInterval(id);
  };
}).share();

let sub0, sub;

sub0 = stream$.subscribe(
      (data) => console.log('subscriber 0', data),
      err => console.error(err),
      () => console.log('completed')
  );

setTimeout(() => {
  sub = stream$.subscribe(
      (data) => console.log('subscriber 1', data),
      err => console.error(err),
      () => console.log('completed')
  );
},1000);


setTimeout(() => {
  sub0.unsubscribe();
  sub.unsubscribe();
},2000);
/*
stream$.subscribe(
    (data) => console.log('subscriber 2', data),
    err => console.error(err),
    () => console.log('completed')
);
*/