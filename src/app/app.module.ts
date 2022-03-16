import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RootComponent} from "./root/root.component";
import {utilityModule} from "./utility/utilty.module";
import {AccountsModule} from "./accounts/accounts.module";
import {LoginComponent} from "./accounts/login/login.component";
import {FormsModule} from "@angular/forms";

// @DecoratorFactory({meta configuration Details})
@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, utilityModule, AccountsModule, FormsModule],
  //exports: [RootComponent],
  bootstrap: [RootComponent]
})

export class AppModule {
}
