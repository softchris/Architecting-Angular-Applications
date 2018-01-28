import { Jedi } from './jedi/jedi.model';
import { Product } from './products/product.model';
import { ProductsState } from './products/products.reducer';
import { RouterState } from '@angular/router';

export interface AppState {
  count: number;
  todos: Array<string>;
  jediList: Array<Jedi>;
  products: ProductsState;
  router: RouterState;
}
