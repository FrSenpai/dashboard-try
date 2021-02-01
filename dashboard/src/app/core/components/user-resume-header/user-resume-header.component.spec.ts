import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResumeHeaderComponent } from './user-resume-header.component';

describe('UserResumeHeaderComponent', () => {
  let component: UserResumeHeaderComponent;
  let fixture: ComponentFixture<UserResumeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserResumeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResumeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
