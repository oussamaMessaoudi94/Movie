import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDetailleComponent } from './serie-detaille.component';

describe('SerieDetailleComponent', () => {
  let component: SerieDetailleComponent;
  let fixture: ComponentFixture<SerieDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieDetailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
