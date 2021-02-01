import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {takeUntil} from "rxjs/operators";
import { User } from 'src/app/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  userInfos?: Observable<User>;
  private readonly onDestroy = new Subject<void> ();
  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.userInfos = this.user.getUserInfos().pipe(takeUntil(this.onDestroy))
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }
  


}
