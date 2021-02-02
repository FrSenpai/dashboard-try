import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-sub-infos',
  templateUrl: './user-sub-infos.component.html',
  styleUrls: ['./user-sub-infos.component.css']
})
export class UserSubInfosComponent implements OnInit {
  @Input() userInfos?:User;
  constructor() { }

  ngOnInit(): void {
  }

}
