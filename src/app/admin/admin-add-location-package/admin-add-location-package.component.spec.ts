import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddLocationPackageComponent } from './admin-add-location-package.component';

describe('AdminAddLocationPackageComponent', () => {
  let component: AdminAddLocationPackageComponent;
  let fixture: ComponentFixture<AdminAddLocationPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddLocationPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddLocationPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
