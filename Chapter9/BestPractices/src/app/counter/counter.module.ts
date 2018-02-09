import { NgModule } from "@angular/core";

import { CounterComponent } from "./counter.component";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";
import { Action } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";
import { ActionReducerMap } from "@ngrx/store/src/models";
import { counterListReducer } from "./counter-list.reducer";

interface CombinedState {
  value: number;
  list: number[];
}

const combinedReducers: ActionReducerMap<CombinedState> = {
  value: counterReducer,
  list: counterListReducer
};

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forFeature<CombinedState, Action>("counter", combinedReducers)
  ],
  exports: [CounterComponent],
  declarations: [CounterComponent],
  providers: []
})
export class CounterModule {}
