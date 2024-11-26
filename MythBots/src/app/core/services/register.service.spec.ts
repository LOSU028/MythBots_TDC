import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { of } from 'rxjs';

fdescribe('RegisterService', () => {
  let service: RegisterService;
  let httpClientSpy: { post: jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient',['post']);
    service = new RegisterService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return object user when registered'),(done: DoneFn) => {
    const mockUserRegister = {
      username: 'testuser',
      email: 'test@email.com',
      password: 'G+4s/gk<Ph6;vZe7Bm:[^f'
    }

    const mockResult = {
      status: true,
      data: {
        _id: '12324',
        username: 'test',
        email: 'string',
      }
    }

    httpClientSpy.post.and.returnValue(of(mockResult));

    const { username, email, password } = mockUserRegister;
    const obj = {
      username: username,
      email: email,
      password: password
    }
    service.register(obj)
    .subscribe(res => {
      expect(res).toEqual(mockResult)
      done()
    })
  }
});
