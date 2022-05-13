import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieUserComponent } from './serie-user.component';

describe('SerieUserComponent', () => {
  let component: SerieUserComponent;
  let fixture: ComponentFixture<SerieUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
