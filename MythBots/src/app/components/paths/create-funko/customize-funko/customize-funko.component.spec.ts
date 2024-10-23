import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeFunkoComponent } from './customize-funko.component';

describe('CustomizeFunkoComponent', () => {
  let component: CustomizeFunkoComponent;
  let fixture: ComponentFixture<CustomizeFunkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizeFunkoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeFunkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
