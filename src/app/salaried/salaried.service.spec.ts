import { TestBed, inject } from '@angular/core/testing';

import { SalariedService } from './salaried.service';

describe('SalariedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalariedService]
    });
  });

  it('should be created', inject([SalariedService], (service: SalariedService) => {
    expect(service).toBeTruthy();
  }));
});
