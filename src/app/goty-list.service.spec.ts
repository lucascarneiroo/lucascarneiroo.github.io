import { TestBed } from '@angular/core/testing';

import { GotyListService } from './goty-list.service';

describe('GotyListService', () => {
  let service: GotyListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotyListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
