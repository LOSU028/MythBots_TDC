import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcbCustomizeComponent } from './pcb-customize.component';

describe('PcbCustomizeComponent', () => {
  let component: PcbCustomizeComponent;
  let fixture: ComponentFixture<PcbCustomizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcbCustomizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcbCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
