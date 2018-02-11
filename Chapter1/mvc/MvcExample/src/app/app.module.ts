import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ContainerComponent } from "./container.component";
import { ExampleComponent } from "./example.component";
import { MyModule } from "./my/my.module";

@NgModule({
  declarations: [AppComponent, ContainerComponent, ExampleComponent],
  imports: [BrowserModule, MyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
