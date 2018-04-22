import { TestBed, inject } from '@angular/core/testing';

import { QuestListService } from './quest-list.service';

describe('QuestListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestListService]
    });
  });

  it('should be created', inject([QuestListService], (service: QuestListService) => {
    expect(service).toBeTruthy();
  }));
});
