import { TestBed } from '@angular/core/testing';

import { NotasserviceService } from './notasservice.service';

describe('NotasserviceService', () => {
  let service: NotasserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
