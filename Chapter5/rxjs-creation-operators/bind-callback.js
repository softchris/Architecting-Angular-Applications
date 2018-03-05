var Observable = /** @class */ (function () {
    function Observable(behaviorFn) {
        this.behaviorFn = behaviorFn;
    }
    Observable.bindCallback = function (behaviorFn) {
        return function () {
            return new Observable(behaviorFn);
        };
    };
    Observable.prototype.subscribe = function (dataCb) {
        this.behaviorFn(dataCb);
    };
    return Observable;
}());
var fn = Observable.bindCallback(function (cb) {
    setTimeout(function () { return cb("data"); }, 3000);
});
var stream$ = fn();
stream$.subscribe(function (data) { return console.log("data", data); });
