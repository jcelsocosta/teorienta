import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedEditalComponent } from './feed-edital.component';

describe('FeedEditalComponent', () => {
  let component: FeedEditalComponent;
  let fixture: ComponentFixture<FeedEditalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedEditalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedEditalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
