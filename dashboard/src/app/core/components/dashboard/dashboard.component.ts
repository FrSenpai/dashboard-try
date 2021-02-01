import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {takeUntil} from "rxjs/operators";
import { RootObject } from 'src/app/core/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  userInfos?: Observable<any>;
  private readonly onDestroy = new Subject<void> ();
  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.userInfos = this.user.getUserInfos().pipe(takeUntil(this.onDestroy))
    console.log(this.userInfos)
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }
  


}
