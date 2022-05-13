import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanticUserComponent } from './romantic-user.component';

describe('RomanticUserComponent', () => {
  let component: RomanticUserComponent;
  let fixture: ComponentFixture<RomanticUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanticUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanticUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
