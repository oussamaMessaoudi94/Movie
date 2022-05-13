import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieUserDetailleComponent } from './serie-user-detaille.component';

describe('SerieUserDetailleComponent', () => {
  let component: SerieUserDetailleComponent;
  let fixture: ComponentFixture<SerieUserDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieUserDetailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieUserDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
