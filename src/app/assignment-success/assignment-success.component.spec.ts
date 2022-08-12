import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSuccessComponent } from './assignment-success.component';

describe('AssignmentSuccessComponent', () => {
  let component: AssignmentSuccessComponent;
  let fixture: ComponentFixture<AssignmentSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
