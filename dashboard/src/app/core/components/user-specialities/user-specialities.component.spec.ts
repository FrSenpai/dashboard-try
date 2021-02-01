import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecialitiesComponent } from './user-specialities.component';

describe('UserSpecialitiesComponent', () => {
  let component: UserSpecialitiesComponent;
  let fixture: ComponentFixture<UserSpecialitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSpecialitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
