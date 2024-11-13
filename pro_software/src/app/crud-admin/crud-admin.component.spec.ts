import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDAdminComponent } from './crud-admin.component';

describe('CRUDAdminComponent', () => {
  let component: CRUDAdminComponent;
  let fixture: ComponentFixture<CRUDAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRUDAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
