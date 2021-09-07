import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteDeVisiteComponent } from './carte-de-visite.component';

describe('CarteDeVisiteComponent', () => {
  let component: CarteDeVisiteComponent;
  let fixture: ComponentFixture<CarteDeVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteDeVisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteDeVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
