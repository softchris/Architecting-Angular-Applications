import { AppState } from "../app-state";

export let getList = (state: AppState) => state.jedis.list;
