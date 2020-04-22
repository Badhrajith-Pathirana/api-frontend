import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramManage2Component } from './program-manage2.component';

describe('ProgramManage2Component', () => {
  let component: ProgramManage2Component;
  let fixture: ComponentFixture<ProgramManage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramManage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramManage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
