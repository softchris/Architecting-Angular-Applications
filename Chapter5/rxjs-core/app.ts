import { MyObservable } from "./Observer";

const corestream$ = MyObservable.create(observer => observer.next(1));
// 1
