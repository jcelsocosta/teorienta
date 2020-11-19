import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedAnnouncementComponent } from './feed-announcement.component';

describe('FeedAnnouncementComponent', () => {
  let component: FeedAnnouncementComponent;
  let fixture: ComponentFixture<FeedAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
