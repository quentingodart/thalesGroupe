import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeTextComponent } from './customize-text.component';

describe('CustomizeTextComponent', () => {
  let component: CustomizeTextComponent;
  let fixture: ComponentFixture<CustomizeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
