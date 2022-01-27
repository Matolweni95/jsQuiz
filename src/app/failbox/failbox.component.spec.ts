import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailboxComponent } from './failbox.component';

describe('FailboxComponent', () => {
  let component: FailboxComponent;
  let fixture: ComponentFixture<FailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
