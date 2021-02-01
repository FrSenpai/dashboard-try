import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-sub-infos',
  templateUrl: './user-sub-infos.component.html',
  styleUrls: ['./user-sub-infos.component.css']
})
export class UserSubInfosComponent implements OnInit {
  @Input() userInfos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
