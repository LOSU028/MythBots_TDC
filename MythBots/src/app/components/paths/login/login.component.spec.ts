import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [provideRouter([]),provideHttpClient(), provideHttpClientTesting()] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return invalid form (missig password)', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const username = component.loginForm.controls['username'];
    username.setValue('usernametest');
    expect(component.loginForm.invalid).toBeTrue();
  })

  it('Should return invalid form (missing username)', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const password = component.loginForm.controls['password'];
    password.setValue('passwordtest');
    expect(component.loginForm.invalid).toBeTrue();
  })

  it('Should return valid form', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const username = component.loginForm.controls['username'];
    username.setValue('usernametest');
    const password = component.loginForm.controls['password'];
    password.setValue('passwordtest');
    expect(component.loginForm.invalid).toBeFalse();
  })
});
