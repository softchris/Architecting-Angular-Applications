import { AppState } from "../app-state";

export const getCounter = (state: AppState) => state.counter.value;
