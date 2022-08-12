import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayDelcarationComponent } from './array-delcaration.component';

describe('ArrayDelcarationComponent', () => {
  let component: ArrayDelcarationComponent;
  let fixture: ComponentFixture<ArrayDelcarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayDelcarationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayDelcarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
