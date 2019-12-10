import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDefaultTypographyComponent } from './ui-default-typography.component';

describe('UiDefaultTypographyComponent', () => {
  let component: UiDefaultTypographyComponent;
  let fixture: ComponentFixture<UiDefaultTypographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiDefaultTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDefaultTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
