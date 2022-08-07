import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumiblesComponent } from './consumibles.component';

describe('ConsumiblesComponent', () => {
  let component: ConsumiblesComponent;
  let fixture: ComponentFixture<ConsumiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumiblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
