var Rx = require('rxjs/Rx');

let stream$ = Rx.Observable.of(1, 2, 3);
stream$.subscribe(data => console.log(data));
/*
asyncCallback((err, data) => {
    if (err) return 'err';
    else return data;
});*/

function fnWithCallback(cb) {
    setTimeout(() => cb('data'), 3000);
}

var fnWithCallbackBinded = Rx.Observable.bindCallback(fnWithCallback);
let source$ = fnWithCallbackBinded();


source$.subscribe(data => console.log('callback', data));