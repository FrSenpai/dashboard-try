import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-resume',
  templateUrl: './user-resume.component.html',
  styleUrls: ['./user-resume.component.css']
})
export class UserResumeComponent implements OnInit {
  @Input() userInfos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
