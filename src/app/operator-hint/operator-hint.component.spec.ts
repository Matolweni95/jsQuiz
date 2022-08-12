import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorHintComponent } from './operator-hint.component';

describe('OperatorHintComponent', () => {
  let component: OperatorHintComponent;
  let fixture: ComponentFixture<OperatorHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorHintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
