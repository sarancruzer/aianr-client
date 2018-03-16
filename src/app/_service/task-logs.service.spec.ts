import { TestBed, inject } from '@angular/core/testing';

import { TaskLogsService } from './task-logs.service';

describe('TaskLogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskLogsService]
    });
  });

  it('should be created', inject([TaskLogsService], (service: TaskLogsService) => {
    expect(service).toBeTruthy();
  }));
});
