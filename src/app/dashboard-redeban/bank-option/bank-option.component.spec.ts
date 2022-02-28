import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankOptionComponent } from './bank-option.component';

describe('BankOptionComponent', () => {
  let component: BankOptionComponent;
  let fixture: ComponentFixture<BankOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
