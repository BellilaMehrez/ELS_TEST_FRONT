import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalariedComponent } from './salaried.component';

describe('SalariedComponent', () => {
  let component: SalariedComponent;
  let fixture: ComponentFixture<SalariedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalariedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalariedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
