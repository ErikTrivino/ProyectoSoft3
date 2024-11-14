import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestObservationComponent } from './request-observation.component';

describe('RequestObservationComponent', () => {
  let component: RequestObservationComponent;
  let fixture: ComponentFixture<RequestObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestObservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
