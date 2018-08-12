import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEmployeeComponent } from './child-employee.component';

describe('ChildEmployeeComponent', () => {
  let component: ChildEmployeeComponent;
  let fixture: ComponentFixture<ChildEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
