import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-qualifications',
  templateUrl: './user-qualifications.component.html',
  styleUrls: ['./user-qualifications.component.css']
})
export class UserQualificationsComponent implements OnInit {
  @Input() userInfos?:User;
  constructor() { }

  ngOnInit(): void {
  }

}
