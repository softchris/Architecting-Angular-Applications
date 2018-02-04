import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./app-state";

@Component({
  selector: "app-root",
  template: `
    <app-jedi-list></app-jedi-list>
  `
})
export class AppComponent {
  title = "app";
}
