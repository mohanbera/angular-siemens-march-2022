import {NgModule} from "@angular/core";
import {ContainerComponent} from "./container/container.component";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [ContainerComponent, FooterComponent, HeaderComponent, MainComponent],
  exports: [ContainerComponent]
})
export class utilityModule {

}
