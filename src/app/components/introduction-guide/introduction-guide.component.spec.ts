import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionGuideComponent } from './introduction-guide.component';

describe('IntroductionGuideComponent', () => {
  let component: IntroductionGuideComponent;
  let fixture: ComponentFixture<IntroductionGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
