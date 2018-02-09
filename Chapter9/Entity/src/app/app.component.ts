import { Component } from "@angular/core";
import { AppState } from "./app-state";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-root",
  template: `
    <div *ngIf="user$ | async; let user" >
    {{ user.name }}
    </div>
    <div>
    <input [(ngModel)]="user" /> <button (click)="add()">Add</button>
    </div>
  `
})
export class AppComponent {
  title = "app";
  user$;
  user;
  id = 0;

  constructor(private store: Store<AppState>) {
    this.user$ = this.store.select("user");
    this.user$.subscribe(data => console.log("user", data));
  }

  add() {
    const user = { id: this.id++, name: this.user };

    this.store.dispatch({
      type: "ADD_USER",
      payload: { user }
    });
  }
}
