import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicycleAddPage } from './bicycle-add.page';

describe('BicycleAddPage', () => {
  let component: BicycleAddPage;
  let fixture: ComponentFixture<BicycleAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicycleAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicycleAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
