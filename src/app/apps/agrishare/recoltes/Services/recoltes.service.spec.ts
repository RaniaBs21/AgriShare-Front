import { TestBed } from '@angular/core/testing';

import { RecoltesService } from './recoltes.service';

describe('RecoltesService', () => {
  let service: RecoltesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoltesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
