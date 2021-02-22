import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionProfileComponent } from './admission-profile.component';

describe('AdmissionProfileComponent', () => {
  let component: AdmissionProfileComponent;
  let fixture: ComponentFixture<AdmissionProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
