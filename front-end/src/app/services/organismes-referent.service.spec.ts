import { TestBed, inject } from '@angular/core/testing';

import { OrganismesReferentService } from './organismes-referent.service';

describe('OrganismesReferentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganismesReferentService]
    });
  });

  it('should be created', inject([OrganismesReferentService], (service: OrganismesReferentService) => {
    expect(service).toBeTruthy();
  }));
});
