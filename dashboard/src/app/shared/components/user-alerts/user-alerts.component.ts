import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-alerts',
  templateUrl: './user-alerts.component.html',
  styleUrls: ['./user-alerts.component.css']
})
export class UserAlertsComponent implements OnInit {
  @Input() userInfos?: RootObject; 
  constructor() { 
  }

  ngOnInit(): void {
  }

}
