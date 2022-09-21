import { TestBed } from '@angular/core/testing';

import { Web3testService } from './web3test.service';

describe('Web3testService', () => {
  let service: Web3testService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Web3testService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
