import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2ArticleComponent } from './page2-article.component';

describe('Page2ArticleComponent', () => {
  let component: Page2ArticleComponent;
  let fixture: ComponentFixture<Page2ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2ArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
