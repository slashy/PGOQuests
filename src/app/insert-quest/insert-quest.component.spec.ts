import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertQuestComponent } from './insert-quest.component';

describe('InsertQuestComponent', () => {
  let component: InsertQuestComponent;
  let fixture: ComponentFixture<InsertQuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertQuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
