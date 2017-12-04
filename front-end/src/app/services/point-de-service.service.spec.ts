import { TestBed, inject } from '@angular/core/testing';

import { PointDeServiceService } from './point-de-service.service';

describe('PointDeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointDeServiceService]
    });
  });

  it('should be created', inject([PointDeServiceService], (service: PointDeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
