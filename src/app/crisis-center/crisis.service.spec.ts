import { TestBed } from '@angular/core/testing';

import { CrisisService } from './crisis.service';

describe('HeroService', () => {
  let service: CrisisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrisisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
