import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonStopImageComponent } from './non-stop-image.component';

describe('NonStopImageComponent', () => {
  let component: NonStopImageComponent;
  let fixture: ComponentFixture<NonStopImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonStopImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonStopImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
