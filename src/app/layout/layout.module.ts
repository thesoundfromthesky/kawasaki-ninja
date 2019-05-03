import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";

import { LayoutComponent } from "./layout.component";
import { ContentComponent } from "./content/content.component";
import { NavbarComponent } from './navbar/navbar.component';
import { BrandComponent } from './navbar/brand/brand.component';
import { NavComponent } from './navbar/nav/nav.component';
import { IconComponent } from './navbar/nav/icon/icon.component';
import { MenuComponent } from './navbar/nav/menu/menu.component';
import { AsideComponent } from './aside/aside.component';
import { LeftAsideComponent } from './aside/left-aside/left-aside.component';
import { LeftControlComponent } from './aside/left-aside/left-control/left-control.component';
import { RightAsideComponent } from './aside/right-aside/right-aside.component';
import { RightControlComponent } from './aside/right-aside/right-control/right-control.component';
import { BottomAsideComponent } from './aside/bottom-aside/bottom-aside.component';
import { BottomControlComponent } from './aside/bottom-aside/bottom-control/bottom-control.component';
import { ControllerDirective } from './aside/bottom-aside/bottom-control/controller.directive';


@NgModule({
  declarations: [
    LayoutComponent,
    ContentComponent,
    NavbarComponent,
    BrandComponent,
    NavComponent,
    IconComponent,
    MenuComponent,
    AsideComponent,
    LeftAsideComponent,
    LeftControlComponent,
    RightAsideComponent,
    RightControlComponent,
    BottomAsideComponent,
    BottomControlComponent,
    ControllerDirective
  ],
  imports: [CommonModule, LayoutRoutingModule]
})
export class LayoutModule {}
