import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUserDetailleComponent } from './movie-user-detaille.component';

describe('MovieUserDetailleComponent', () => {
  let component: MovieUserDetailleComponent;
  let fixture: ComponentFixture<MovieUserDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieUserDetailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieUserDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
