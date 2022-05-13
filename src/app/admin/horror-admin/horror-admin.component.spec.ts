import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorAdminComponent } from './horror-admin.component';

describe('HorrorAdminComponent', () => {
  let component: HorrorAdminComponent;
  let fixture: ComponentFixture<HorrorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorrorAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorrorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
