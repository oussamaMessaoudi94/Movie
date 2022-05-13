import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorUserComponent } from './horror-user.component';

describe('HorrorUserComponent', () => {
  let component: HorrorUserComponent;
  let fixture: ComponentFixture<HorrorUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorrorUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorrorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
