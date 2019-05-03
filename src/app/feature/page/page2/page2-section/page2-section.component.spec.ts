import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2SectionComponent } from './page2-section.component';

describe('Page2SectionComponent', () => {
  let component: Page2SectionComponent;
  let fixture: ComponentFixture<Page2SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2SectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
