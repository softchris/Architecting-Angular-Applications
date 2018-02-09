import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule, Action } from "@ngrx/store";
import { FormsModule } from "@angular/forms";
import { EntityState, createEntityAdapter, EntityAdapter } from "@ngrx/entity";

import { AppComponent } from "./app.component";
import { ActionPayload } from "./interfaces";
import { User } from "./user.model";

export interface State extends EntityState<User> {
  // additional entity state properties
  selectedUserId: number | null;
}

const adapter: EntityAdapter<User> = createEntityAdapter<User>();
const initialState = {
  ids: [],
  entities: {}
};

const initial = adapter.getInitialState(initialState);

function userReducer(state = initial, action: ActionPayload<User>) {
  switch (action.type) {
    case "ADD_USER":
      return adapter.addOne({ id: "1", name: "test" }, state);
    default:
      return state;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      user: userReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
