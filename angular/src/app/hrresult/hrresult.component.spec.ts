import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrresultComponent } from './hrresult.component';

describe('HrresultComponent', () => {
  let component: HrresultComponent;
  let fixture: ComponentFixture<HrresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
