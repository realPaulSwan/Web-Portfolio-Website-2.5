import { TestBed } from '@angular/core/testing';

import { FilterProjectListCommunicatorService } from './filter-project-list-communicator.service';

describe('FilterProjectListCommunicatorService', () => {
  let service: FilterProjectListCommunicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterProjectListCommunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
