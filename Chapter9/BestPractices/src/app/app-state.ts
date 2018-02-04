import { JediState } from "./jedi/jedi-list.reducer";
import { CounterState } from "./counter/counter.reducer";

export interface AppState {
  counter: CounterState;
  jedis: JediState;
}
