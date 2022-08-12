import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentHintComponent } from './assignment-hint.component';

describe('AssignmentHintComponent', () => {
  let component: AssignmentHintComponent;
  let fixture: ComponentFixture<AssignmentHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentHintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
