import { TestBed } from '@angular/core/testing';

import { RecolteService } from './recolte.service';

describe('RecoltesService', () => {
  let service: RecolteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecolteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
