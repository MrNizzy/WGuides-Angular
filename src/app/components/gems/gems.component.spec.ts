import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemsComponent } from './gems.component';

describe('GemsComponent', () => {
  let component: GemsComponent;
  let fixture: ComponentFixture<GemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
