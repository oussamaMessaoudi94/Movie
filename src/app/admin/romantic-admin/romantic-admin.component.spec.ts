import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanticAdminComponent } from './romantic-admin.component';

describe('RomanticAdminComponent', () => {
  let component: RomanticAdminComponent;
  let fixture: ComponentFixture<RomanticAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanticAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanticAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
