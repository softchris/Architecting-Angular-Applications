console.log("test");
debugger;
import Rx from "rxjs/Rx";

describe("a test", () => {
  it("should emit 1 2 3 and complete stream", () => {
    let _ = require("lodash");
    let testScheduler = new Rx.TestScheduler((a, b) => _.isEqual(a, b));

    const lhsMarble = "-a-b-c-|";
    const expected = "-a-b-c-|";
    const expectedMap = {
      a: 1,
      b: 2,
      c: 3
    };

    const myAlgorithm = lhs => Rx.Observable.from(lhs);

    const lhs$ = testScheduler.createHotObservable(lhsMarble, {
      a: 1,
      b: 2,
      c: 3
    });
    const actual$ = lhs$;

    testScheduler.expectObservable(actual$).toBe(expected, expectedMap);
    testScheduler.flush();
  });
});
