import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoHomeComponent } from './funko-home.component';

describe('FunkoHomeComponent', () => {
  let component: FunkoHomeComponent;
  let fixture: ComponentFixture<FunkoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunkoHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunkoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
