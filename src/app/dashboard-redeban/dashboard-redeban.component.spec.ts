import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRedebanComponent } from './dashboard-redeban.component';

describe('DashboardRedebanComponent', () => {
  let component: DashboardRedebanComponent;
  let fixture: ComponentFixture<DashboardRedebanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRedebanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRedebanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
