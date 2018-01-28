import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Injectable } from '@angular/core';

import { StoreModule, Action } from '@ngrx/store';

import { AppComponent } from './app.component';
import { counterReducer } from './reducer';
import { TodoModule } from './todo/todo.module';
import { todosReducer } from './todo/reducer';

import { JediModule } from './jedi/jedi.module';
import { jediListReducer } from './jedi/list.reducer';

import { productsReducer } from './products/products.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsModule } from './products/products.module';

import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { TestingComponent } from './testing.component';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { EffectsModule } from '@ngrx/effects';

@Injectable()
export class IncrementEffects {
  /*
  @Effect()
  productsAdd$: Observable<Action> = this.actions$.pipe(
    ofType(ADD_PRODUCT),
    switchMap(action => this.srv.addProduct(action))
  );
  */

  @Effect()
  products$: Observable<Action> = this.actions$.pipe(
    ofType('INCREMENT'),
    switchMap(action => {
      console.log('increment happened');
      return of({ type: 'test' });
    })
  );

  constructor(private actions$: Actions<Action>) {}
}

@NgModule({
  declarations: [AppComponent, TestingComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: counterReducer,
      todos: todosReducer,
      jediList: jediListReducer,
      products: productsReducer,
      router: routerReducer
    }),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([{ path: 'testing', component: TestingComponent }]),
    //StoreRouterConnectingModule.forRoot({
    //  stateKey: 'router' // name of reducer key
    // }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    TodoModule,
    JediModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
