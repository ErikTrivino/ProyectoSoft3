import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReviewComponent } from './request-review.component';

describe('RequestReviewComponent', () => {
  let component: RequestReviewComponent;
  let fixture: ComponentFixture<RequestReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
