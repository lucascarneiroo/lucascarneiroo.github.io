import { TestBed } from '@angular/core/testing';

import { GameAwardsService } from './game.service';

describe('GameAwardsService', () => {
  let service: GameAwardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameAwardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
