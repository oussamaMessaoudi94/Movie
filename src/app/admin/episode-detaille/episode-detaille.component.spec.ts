import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDetailleComponent } from './episode-detaille.component';

describe('EpisodeDetailleComponent', () => {
  let component: EpisodeDetailleComponent;
  let fixture: ComponentFixture<EpisodeDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeDetailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
