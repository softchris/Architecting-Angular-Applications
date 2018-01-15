import {Observable} from 'rxjs';
import { marbles } from "rxjs-marbles";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/delay';

describe("Testing our RxJS code through marbles", () => {
  it("should make all values +1 larger when using map() operator", marbles(m => {
    const values = { a: 1, b: 2, c: 3, d: 4 };

    const source =  m.hot("--^-a-b-c-|", values);
    const subs =            "^-------!";
    const expected = m.cold("--b-c-d-|", values);

    const destination = source.map((value) => value + 1);
    m.expect(destination).toBeObservable(expected);
    m.expect(source).toHaveSubscriptions(subs);
  }));

  it("should produce an error", marbles(m => {
    const expected = m.cold("#");

    const actual =  Observable.throw('error');
    m.expect(actual).toBeObservable(expected);
  }));

  it("should produce values and an error", marbles(m => {
    const values = { a: 1, b: 2, c: 3};
    const source = m.hot('-a-b-#', values);
    const expected = m.cold("-b-c-#", values);

    const actual =  source.map(x => x + 1);
    m.expect(actual).toBeObservable(expected);
  }));

  it("should delay all values with 10 ms", marbles(m => {
    const values = { a: 1, b: 2, c: 3};
    const source = m.hot('-a-b', values);
    const expected = m.cold("--a--b", values);

    const actual =  source.delay(10);
    m.expect(actual).toBeObservable(expected);
  }));
});
