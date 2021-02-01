import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-qualifications',
  templateUrl: './user-qualifications.component.html',
  styleUrls: ['./user-qualifications.component.css']
})
export class UserQualificationsComponent implements OnInit {
  @Input() userInfos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
