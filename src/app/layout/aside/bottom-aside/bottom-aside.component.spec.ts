import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomAsideComponent } from './bottom-aside.component';

describe('BottomAsideComponent', () => {
  let component: BottomAsideComponent;
  let fixture: ComponentFixture<BottomAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
