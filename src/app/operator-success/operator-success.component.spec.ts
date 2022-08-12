import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorSuccessComponent } from './operator-success.component';

describe('OperatorSuccessComponent', () => {
  let component: OperatorSuccessComponent;
  let fixture: ComponentFixture<OperatorSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
