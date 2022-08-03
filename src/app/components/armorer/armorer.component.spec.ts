import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorerComponent } from './armorer.component';

describe('ArmorerComponent', () => {
  let component: ArmorerComponent;
  let fixture: ComponentFixture<ArmorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
