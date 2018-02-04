import { NgModule } from "@angular/core";

import { CounterComponent } from "./counter.component";
import { StoreModule } from "@ngrx/store";
import { counterReducers } from "./counter.reducer";
import { Action } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";

const combinedReducers = { ...counterReducers };

interface CombinedState {
  value: number;
}

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
