import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCustomTypographyComponent } from './ui-custom-typography.component';

describe('UiCustomTypographyComponent', () => {
  let component: UiCustomTypographyComponent;
  let fixture: ComponentFixture<UiCustomTypographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCustomTypographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCustomTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
