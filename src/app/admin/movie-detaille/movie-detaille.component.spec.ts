import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailleComponent } from './movie-detaille.component';

describe('MovieDetailleComponent', () => {
  let component: MovieDetailleComponent;
  let fixture: ComponentFixture<MovieDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
