const stream$ = Rx.Observable.range(1, 99);

stream$.subscribe(data => console.log(data));
// emits 1... 99
