import { TestBed } from '@angular/core/testing';

import { ManageservicesService } from './manageservices.service';

describe('ManageservicesService', () => {
  let service: ManageservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
