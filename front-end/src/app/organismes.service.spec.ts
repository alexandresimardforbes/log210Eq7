import { TestBed, inject } from '@angular/core/testing';

import { OrganismesService } from './organismes.service';

describe('OrganismesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganismesService]
    });
  });

  it('should be created', inject([OrganismesService], (service: OrganismesService) => {
    expect(service).toBeTruthy();
  }));
});
