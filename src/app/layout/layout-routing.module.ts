import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutComponent } from "./layout.component";
import { HomeModule } from '../feature/home/home.module';
import { PageModule } from "../feature/page/page.module";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      // { path: "", redirectTo: "page", pathMatch: "full" },
      { path: "", loadChildren: () => HomeModule },
      {
        path: "page",
        loadChildren: "src/app/feature/page/page.module#PageModule"
      }
    ]
  },
  { path: "**", redirectTo: "", component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
