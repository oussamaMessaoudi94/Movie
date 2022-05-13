import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeUserComponent } from './anime-user.component';

describe('AnimeUserComponent', () => {
  let component: AnimeUserComponent;
  let fixture: ComponentFixture<AnimeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
