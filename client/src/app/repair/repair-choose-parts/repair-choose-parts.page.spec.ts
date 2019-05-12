import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairChoosePartsPage } from './repair-choose-parts.page';

describe('RepairChoosePartsPage', () => {
  let component: RepairChoosePartsPage;
  let fixture: ComponentFixture<RepairChoosePartsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairChoosePartsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairChoosePartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
