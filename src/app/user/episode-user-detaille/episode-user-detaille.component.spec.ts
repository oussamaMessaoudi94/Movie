import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeUserDetailleComponent } from './episode-user-detaille.component';

describe('EpisodeUserDetailleComponent', () => {
  let component: EpisodeUserDetailleComponent;
  let fixture: ComponentFixture<EpisodeUserDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeUserDetailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeUserDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
