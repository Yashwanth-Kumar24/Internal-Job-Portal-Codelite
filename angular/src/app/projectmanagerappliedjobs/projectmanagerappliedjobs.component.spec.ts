import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagerappliedjobsComponent } from './projectmanagerappliedjobs.component';

describe('ProjectmanagerappliedjobsComponent', () => {
  let component: ProjectmanagerappliedjobsComponent;
  let fixture: ComponentFixture<ProjectmanagerappliedjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectmanagerappliedjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmanagerappliedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
