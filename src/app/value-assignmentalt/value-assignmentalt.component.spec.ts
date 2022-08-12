import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueAssignmentaltComponent } from './value-assignmentalt.component';

describe('ValueAssignmentaltComponent', () => {
  let component: ValueAssignmentaltComponent;
  let fixture: ComponentFixture<ValueAssignmentaltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueAssignmentaltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueAssignmentaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
