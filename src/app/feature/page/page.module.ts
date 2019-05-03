import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageRoutingModule } from "./page-routing.module";
import { PageComponent } from "./page/page.component";
import { Page2Component } from "./page2/page2.component";
import { PageArticleComponent } from './page/page-article/page-article.component';

import { ArticleModule } from 'src/app/shared/components/article/article.module';
import { SectionModule } from 'src/app/shared/components/section/section.module';
import { SectionComponent } from './page/section/section.component';
import { Page2ArticleComponent } from './page2/page2-article/page2-article.component';
import { Page2SectionComponent } from './page2/page2-section/page2-section.component';

@NgModule({
  declarations: [PageComponent, Page2Component, PageArticleComponent, SectionComponent, Page2ArticleComponent, Page2SectionComponent],
  imports: [CommonModule, PageRoutingModule, ArticleModule, SectionModule]
})
export class PageModule {}
