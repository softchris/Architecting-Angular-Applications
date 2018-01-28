import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './products.effect';
import { HttpClientModule } from '@angular/common/http';

import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { ProductsHttpActions } from './products-http.actions';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, EffectsModule.forFeature([ProductEffects])],
  exports: [ProductsComponent],
  declarations: [ProductsComponent],
  providers: [ProductsHttpActions]
})
export class ProductsModule {}
