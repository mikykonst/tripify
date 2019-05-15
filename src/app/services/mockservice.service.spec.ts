import { TestBed } from '@angular/core/testing';

import { MockserviceService } from './mockservice.service';

describe('MockserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockserviceService = TestBed.get(MockserviceService);
    expect(service).toBeTruthy();
  });
});
