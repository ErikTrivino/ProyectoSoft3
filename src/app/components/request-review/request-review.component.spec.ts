import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RequestReviewComponent } from './request-review.component'; 
import { FormsModule } from '@angular/forms';

describe('RequestReviewComponent', () => {
  let component: RequestReviewComponent;
  let fixture: ComponentFixture<RequestReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RequestReviewComponent, FormsModule ]  
    });

    fixture = TestBed.createComponent(RequestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should log selected date and time when clicking "Programar servicio"', fakeAsync(() => {
    const btn = fixture.debugElement.nativeElement.querySelector('#agregarFechaHora');
    btn.click(); // Abre el modal
    
    fixture.detectChanges();
  
    const dateInput = fixture.debugElement.nativeElement.querySelector('input[type="date"]');
    const select = fixture.debugElement.nativeElement.querySelector('select');
  

    dateInput.value = '2024-11-17'; 
    select.value = '10:00 AM'; 
 
    dateInput.dispatchEvent(new Event('input'));
    select.dispatchEvent(new Event('change')); 
    fixture.detectChanges(); 
    
    const confirmBtn = fixture.debugElement.nativeElement.querySelector('.modal-actions .btn');
    confirmBtn.click();
    
    fixture.detectChanges(); 
    
  
    expect(component.selectedDate).toBe('2024-11-17');
   
  }));
  
});
