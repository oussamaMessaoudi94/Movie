import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeAdminComponent } from './anime-admin.component';

describe('AnimeAdminComponent', () => {
  let component: AnimeAdminComponent;
  let fixture: ComponentFixture<AnimeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
