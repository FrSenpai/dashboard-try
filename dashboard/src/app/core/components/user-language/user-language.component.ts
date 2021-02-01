import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-language',
  templateUrl: './user-language.component.html',
  styleUrls: ['./user-language.component.css']
})
export class UserLanguageComponent implements OnInit {
  @Input() userInfos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
