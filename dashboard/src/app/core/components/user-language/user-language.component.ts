import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-language',
  templateUrl: './user-language.component.html',
  styleUrls: ['./user-language.component.css']
})
export class UserLanguageComponent implements OnInit {
  @Input() userInfos?:RootObject;
  constructor() { }

  ngOnInit(): void {
  }

}
