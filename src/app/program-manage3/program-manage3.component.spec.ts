import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramManage3Component } from './program-manage3.component';

describe('ProgramManage3Component', () => {
  let component: ProgramManage3Component;
  let fixture: ComponentFixture<ProgramManage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramManage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramManage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
