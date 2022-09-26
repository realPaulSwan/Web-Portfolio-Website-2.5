import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTCWebProjectRedirectComponent } from './dtcweb-project-redirect.component';

describe('DTCWebProjectRedirectComponent', () => {
  let component: DTCWebProjectRedirectComponent;
  let fixture: ComponentFixture<DTCWebProjectRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DTCWebProjectRedirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DTCWebProjectRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
