import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDetaiComponent } from './episode-detai.component';

describe('EpisodeDetaiComponent', () => {
  let component: EpisodeDetaiComponent;
  let fixture: ComponentFixture<EpisodeDetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeDetaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
