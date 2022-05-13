import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieAdminComponent } from './serie-admin.component';

describe('SerieAdminComponent', () => {
  let component: SerieAdminComponent;
  let fixture: ComponentFixture<SerieAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
