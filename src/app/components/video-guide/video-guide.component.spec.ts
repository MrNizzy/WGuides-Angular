import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGuideComponent } from './video-guide.component';

describe('VideoGuideComponent', () => {
  let component: VideoGuideComponent;
  let fixture: ComponentFixture<VideoGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
