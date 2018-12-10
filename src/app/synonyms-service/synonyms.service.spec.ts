import { TestBed, inject } from '@angular/core/testing';

import { SynonymsServiceService } from './synonyms-service.service';

describe('SynonymsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SynonymsServiceService]
    });
  });

  it('should be created', inject([SynonymsServiceService], (service: SynonymsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
