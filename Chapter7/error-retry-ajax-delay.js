import Rx from "rxjs/Rx";

let start = new Date();

let timesToRetry = 3;

function isOkError(errorCode) {
  return errorCode >= 400 && errorCode < 500;
}

let ajaxStream$ = Rx.Observable.ajax("UK1.json")
  .do(r => console.log("emitted"))
  .map(r => r.response)
  .retryWhen(err => {
    return err
      .do(val => {
        if (!isOkError(val.status) || timesToRetry === 0) {
          throw "give up";
        }
      })
      .delay(3000);
  });

/*
let ajaxStream$ = Rx.Observable.ajax("UK1.json")
  .do(r => console.log("emitted"))
  .map(r => r.response)
  .retryWhen(err => {
    return err
      .delay(3000)
      .take(3)
      .concat(Rx.Observable.throw("giving up"));
  });
*/
ajaxStream$.subscribe(
  data => console.log(`ajax result`, data),
  err => console.error(`ajax error ${new Date() - start}`, err),
  () => console.log("completed")
);
