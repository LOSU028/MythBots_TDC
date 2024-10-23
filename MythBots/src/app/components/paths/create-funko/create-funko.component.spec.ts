import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFunkoComponent } from './create-funko.component';

describe('CreateFunkoComponent', () => {
  let component: CreateFunkoComponent;
  let fixture: ComponentFixture<CreateFunkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFunkoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFunkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
