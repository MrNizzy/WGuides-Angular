import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsPriorityComponent } from './statistics-priority.component';

describe('StatisticsPriorityComponent', () => {
  let component: StatisticsPriorityComponent;
  let fixture: ComponentFixture<StatisticsPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsPriorityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
