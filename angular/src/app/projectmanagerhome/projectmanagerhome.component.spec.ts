import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagerhomeComponent } from './projectmanagerhome.component';

describe('ProjectmanagerhomeComponent', () => {
  let component: ProjectmanagerhomeComponent;
  let fixture: ComponentFixture<ProjectmanagerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectmanagerhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmanagerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
