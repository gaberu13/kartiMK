import { TestBed } from '@angular/core/testing';

import { SharedEmitterServiceService } from './shared-emitter-service.service';

describe('SharedEmitterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedEmitterServiceService = TestBed.get(SharedEmitterServiceService);
    expect(service).toBeTruthy();
  });
});
