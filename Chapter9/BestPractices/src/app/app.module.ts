import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { JediModule } from "./jedi/jedi.module";
import { CounterModule } from "./counter/counter.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot({}), JediModule, CounterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
