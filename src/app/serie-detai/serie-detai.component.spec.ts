import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDetaiComponent } from './serie-detai.component';

describe('SerieDetaiComponent', () => {
  let component: SerieDetaiComponent;
  let fixture: ComponentFixture<SerieDetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieDetaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
