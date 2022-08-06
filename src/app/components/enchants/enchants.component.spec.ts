import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantsComponent } from './enchants.component';

describe('EnchantsComponent', () => {
  let component: EnchantsComponent;
  let fixture: ComponentFixture<EnchantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnchantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
