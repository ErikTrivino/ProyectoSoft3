import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterTestingModule], 
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const headerTitle = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(headerTitle.textContent).toBe('Telesai');
  });

  it('should have three navigation links', () => {
    const navLinks = fixture.debugElement.queryAll(By.css('nav ul li a'));
    expect(navLinks.length).toBe(3);
  });

  
});
