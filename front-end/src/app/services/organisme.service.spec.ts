import { TestBed, inject } from '@angular/core/testing';

import { OrganismeService } from './organisme.service';

describe('OrganismeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganismeService]
    });
  });

  it('should be created', inject([OrganismeService], (service: OrganismeService) => {
    expect(service).toBeTruthy();
  }));
});
