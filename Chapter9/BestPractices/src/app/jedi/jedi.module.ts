import { NgModule } from "@angular/core";
import { JediListComponent } from "./jedi-list.component";
import { StoreModule } from "@ngrx/store";
import { jediListReducer, jediListReducers } from "./jedi-list.reducer";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Jedi } from "./jedi.model";
import { Action } from "@ngrx/store";

const combinedReducers = { ...jediListReducers };

interface JediCombinedState {
  list: Array<Jedi>;
}

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.forFeature<JediCombinedState, Action>("jedis", combinedReducers)
  ],
  exports: [JediListComponent],
  declarations: [JediListComponent],
  providers: []
})
export class JediModule {}
