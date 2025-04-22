import { TestBed } from '@angular/core/testing';

import { LocalStorageTodosService } from './local-storage-todos.service';

describe('LocalStorageTodosService', () => {
  let service: LocalStorageTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
