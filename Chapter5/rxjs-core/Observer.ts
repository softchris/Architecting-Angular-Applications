export class MyObserver {
  constructor(private dataFn) {}
  next(value) {
    this.dataFn(value);
  }
}

export class MyObservable {
  static create(behaviourFn): Observable {
    return new Observable(behaviourFn);
  }
  constructor(private behaviourFn) {}
  subscribe(dataFn) {
    let observer = new MyObserver(dataFn);
    this.behaviourFn(observer);
  }
}
