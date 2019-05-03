import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Page2Component } from "./page2/page2.component";
import { PageComponent } from "./page/page.component";

const routes: Routes = [
  { path: "one", component: PageComponent, data: { animation: "isLeft" } },
  { path: "two", component: Page2Component, data: { animation: "isRight" } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {}
