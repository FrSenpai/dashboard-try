import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQualificationsComponent } from './user-qualifications.component';

describe('UserQualificationsComponent', () => {
  let component: UserQualificationsComponent;
  let fixture: ComponentFixture<UserQualificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserQualificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
