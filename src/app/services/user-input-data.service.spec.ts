import { TestBed } from '@angular/core/testing';

import { UserInputDataService } from './user-input-data.service';

describe('UserInputDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInputDataService = TestBed.get(UserInputDataService);
    expect(service).toBeTruthy();
  });
});
