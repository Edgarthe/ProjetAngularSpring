import { TestBed } from '@angular/core/testing';

import { ProjetservService } from './projetserv.service';

describe('ProjetservService', () => {
  let service: ProjetservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
