import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleComponent } from "./article.component";
import { TitleComponent } from "./title/title.component";
import { SubTitleComponent } from "./sub-title/sub-title.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    ArticleComponent,
    TitleComponent,
    SubTitleComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [CommonModule],
  exports: [
    ArticleComponent,
    TitleComponent,
    SubTitleComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class ArticleModule {}
