import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyOtpComponent } from './key-otp.component';

describe('KeyOtpComponent', () => {
  let component: KeyOtpComponent;
  let fixture: ComponentFixture<KeyOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
