import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrComponent } from './template-dr.component';

describe('TemplateDrComponent', () => {
  let component: TemplateDrComponent;
  let fixture: ComponentFixture<TemplateDrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
