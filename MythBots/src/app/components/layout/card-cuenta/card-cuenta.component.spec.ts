import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCuentaComponent } from './card-cuenta.component';

describe('CardCuentaComponent', () => {
  let component: CardCuentaComponent;
  let fixture: ComponentFixture<CardCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCuentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
