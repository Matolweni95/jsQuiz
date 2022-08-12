import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueAssignmentComponent } from './value-assignment.component';

describe('ValueAssignmentComponent', () => {
  let component: ValueAssignmentComponent;
  let fixture: ComponentFixture<ValueAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
