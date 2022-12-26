import { TestBed } from '@angular/core/testing';

import { AdminPagesGuard } from './admin-pages.guard';

describe('AdminPagesGuard', () => {
  let guard: AdminPagesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminPagesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
