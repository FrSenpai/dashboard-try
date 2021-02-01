import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-language',
  templateUrl: './user-language.component.html',
  styleUrls: ['./user-language.component.css']
})
export class UserLanguageComponent implements OnInit {
  @Input() userInfos?:User;
  constructor() { }

  ngOnInit(): void {
  }

}
