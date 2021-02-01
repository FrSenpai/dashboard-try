import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userInfos$: Observable<any>
  constructor(public user: UserService) {
    this.userInfos$ = this.user.getUserInfos()
   }

  ngOnInit(): void {
  }


}
