import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RootComponent} from "./root/root.component";
import {utilityModule} from "./utility/utilty.module";

// @DecoratorFactory({meta configuration Details})
@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, utilityModule],
  exports: [RootComponent],
  bootstrap: [RootComponent]
})

export class AppModule {
}
