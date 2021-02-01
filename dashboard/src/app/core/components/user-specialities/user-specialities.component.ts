import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-specialities',
  templateUrl: './user-specialities.component.html',
  styleUrls: ['./user-specialities.component.css']
})
export class UserSpecialitiesComponent implements OnInit {
  @Input() userInfos?:User;
  constructor() { }

  ngOnInit(): void {
  }

}
