import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-alerts',
  templateUrl: './user-alerts.component.html',
  styleUrls: ['./user-alerts.component.css']
})
export class UserAlertsComponent implements OnInit {
  @Input() userInfos: any; 
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.userInfos)
  }

}
