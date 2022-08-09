import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsComponent } from './talents.component';

describe('TalentsComponent', () => {
  let component: TalentsComponent;
  let fixture: ComponentFixture<TalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
