import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitiesRoleComponent } from './functionalities-role.component';

describe('FunctionalitiesRoleComponent', () => {
  let component: FunctionalitiesRoleComponent;
  let fixture: ComponentFixture<FunctionalitiesRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalitiesRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalitiesRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
