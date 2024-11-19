import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSoporteComponent } from './modal-soporte.component';

describe('ModalSoporteComponent', () => {
  let component: ModalSoporteComponent;
  let fixture: ComponentFixture<ModalSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSoporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
