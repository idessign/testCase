import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxUiDesignComponent } from './ux-ui-design.component';

describe('UxUiDesignComponent', () => {
  let component: UxUiDesignComponent;
  let fixture: ComponentFixture<UxUiDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxUiDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxUiDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
