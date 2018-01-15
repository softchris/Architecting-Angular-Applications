import Rx from "rxjs/Rx";

let stream = Rx.Observable.create(observer => {
  observer.next(1);
  observer.error("err");
})
  .retry(3)
  .subscribe(data => console.log(data));
