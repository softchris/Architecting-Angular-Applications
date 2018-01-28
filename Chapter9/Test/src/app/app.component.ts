import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Increment, Decrement } from './actions';
import { AppState } from './app-state';

@Component({
  selector: 'app-root',
  template: `
  {{ count$ | async }}
  <button (click)="increment()">Increment</button>
  <button (click)="decrement()">Decrement</button>

  <app-todos></app-todos>
  <jedi-list></jedi-list>
  <app-products></app-products>
  <div>
    <a routerLink="/testing" routerLinkActive="active">Testing</a>
  </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(Increment());
  }

  decrement() {
    this.store.dispatch(Decrement());
  }
}
