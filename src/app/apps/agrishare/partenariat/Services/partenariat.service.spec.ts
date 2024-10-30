import { TestBed } from '@angular/core/testing';

import { PartenariatService } from './partenariat.service';

describe('PartenariatService', () => {
  let service: PartenariatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartenariatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
