import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescComponent } from './typesc.component';

describe('TypescComponent', () => {
  let component: TypescComponent;
  let fixture: ComponentFixture<TypescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
