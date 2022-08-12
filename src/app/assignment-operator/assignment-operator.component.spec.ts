import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentOperatorComponent } from './assignment-operator.component';

describe('AssignmentOperatorComponent', () => {
  let component: AssignmentOperatorComponent;
  let fixture: ComponentFixture<AssignmentOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
