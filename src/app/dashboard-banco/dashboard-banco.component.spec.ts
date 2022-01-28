import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBancoComponent } from './dashboard-banco.component';

describe('DashboardBancoComponent', () => {
  let component: DashboardBancoComponent;
  let fixture: ComponentFixture<DashboardBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
