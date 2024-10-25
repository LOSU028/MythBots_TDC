import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoCustomizeComponent } from './funko-customize.component';

describe('FunkoCustomizeComponent', () => {
  let component: FunkoCustomizeComponent;
  let fixture: ComponentFixture<FunkoCustomizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunkoCustomizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunkoCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
