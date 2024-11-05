import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcbBasicComponent } from './pcb-basic.component';

describe('PcbBasicComponent', () => {
  let component: PcbBasicComponent;
  let fixture: ComponentFixture<PcbBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcbBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcbBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
