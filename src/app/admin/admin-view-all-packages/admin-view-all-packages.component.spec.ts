import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllPackagesComponent } from './admin-view-all-packages.component';

describe('AdminViewAllPackagesComponent', () => {
  let component: AdminViewAllPackagesComponent;
  let fixture: ComponentFixture<AdminViewAllPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAllPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewAllPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
