import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrappliedjobsComponent } from './hrappliedjobs.component';

describe('HrappliedjobsComponent', () => {
  let component: HrappliedjobsComponent;
  let fixture: ComponentFixture<HrappliedjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrappliedjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrappliedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
