import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubInfosComponent } from './user-sub-infos.component';

describe('UserSubInfosComponent', () => {
  let component: UserSubInfosComponent;
  let fixture: ComponentFixture<UserSubInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSubInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
