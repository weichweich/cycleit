import { TestBed } from '@angular/core/testing';

import { CycleitService } from './cycleit.service';

describe('CycleitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', ( => {
    const service: CycleitService = TestBed.get(CycleitService);
    expect(service).toBeTruthy();
  });
});
