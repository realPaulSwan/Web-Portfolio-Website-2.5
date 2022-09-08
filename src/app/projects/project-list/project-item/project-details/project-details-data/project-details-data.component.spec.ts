import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsDataComponent } from './project-details-data.component';

describe('ProjectDetailsDataComponent', () => {
  let component: ProjectDetailsDataComponent;
  let fixture: ComponentFixture<ProjectDetailsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
