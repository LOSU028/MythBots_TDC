import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcbDesingComponent } from './pcb-desing.component';

describe('PcbDesingComponent', () => {
  let component: PcbDesingComponent;
  let fixture: ComponentFixture<PcbDesingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcbDesingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcbDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
