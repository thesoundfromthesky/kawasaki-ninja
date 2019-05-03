import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ArticleModule } from "src/app/shared/components/article/article.module";
import { HomeArticleComponent } from "./home-article/home-article.component";
import { HomeSectionComponent } from "./home-section/home-section.component";
import { SectionModule } from "src/app/shared/components/section/section.module";

@NgModule({
  declarations: [HomeComponent, HomeArticleComponent, HomeSectionComponent],
  imports: [CommonModule, HomeRoutingModule, ArticleModule, SectionModule]
})
export class HomeModule {}
