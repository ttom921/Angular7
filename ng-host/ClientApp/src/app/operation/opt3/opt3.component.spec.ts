import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opt3Component } from './opt3.component';

describe('Opt3Component', () => {
  let component: Opt3Component;
  let fixture: ComponentFixture<Opt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
